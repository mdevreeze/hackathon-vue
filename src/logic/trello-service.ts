import { TrelloClient } from 'trello.ts'
import { TrelloApiKey, TrelloToken } from '../config'

export class TrelloService {
  private trelloClient: TrelloClient

  constructor() {
    this.trelloClient = new TrelloClient({
      key: TrelloApiKey,
      token: TrelloToken
    })
  }

  public async getBoards() {
    return this.trelloClient.organizations.getBoards({
      id: 'uptrends'
    })
  }

  public async getCards(boardId: string) {
    return this.trelloClient.board.getCards({ id: boardId })
  }

  public async getLists(boardId: string) {
    return this.trelloClient.board.getLists({ id: boardId })
  }

  public async getListsStatus(boardId: string) {
    const lists = await this.getLists(boardId)
    const cards = await this.getCards(boardId)
    return lists.map((l: any) => ({ list: l.name, points: cards.filter((c: any) => c.idList === l.id).reduce(this.calcCardStatus, 0) }))
  }

  private calcCardStatus(total: number, card:any): number {
    const diamondsMatch = card.name ? card.name.match(/♦/g) || [] : []
    const diamonds = diamondsMatch.length
    switch (diamonds) {
      case 1:
        return 2 + total
      case 2:
        return 4 + total
      case 3:
        return 16 + total
      case 4:
        return 80 + total
      default:
        const match = card.name ? card.name.match(/↓\((\d*)\)/) : undefined
        return (match && match.length > 0 ? parseInt(match[1]) : 0) + total
    }
  }
}
