import { TrelloClient } from "trello.ts";
import { TrelloApiKey, TrelloToken } from "../config";

export class TrelloService {
    private trelloClient: TrelloClient;

    constructor() {
        this.trelloClient = new TrelloClient({
            key: TrelloApiKey,
            token: TrelloToken,
        });
    }

    public getBoards() {
        return this.trelloClient.organizations.getBoards({
            id: "dreamteam593",
        });
    }
}
