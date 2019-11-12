
<template>
  <div>{{status}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TrelloService } from '../logic/trello-service'
import Component from 'vue-class-component'
import { Watch, Prop } from 'vue-property-decorator'

@Component
export default class Status extends Vue {
  @Prop() public board!: string;
  public status: any = []
  private trelloService: TrelloService = new TrelloService()

  mounted() {
    if (this.board) { this.onBoardChanged(this.board) }
  }

  @Watch('board')
  async onBoardChanged(boardId: string) {
    this.status = await this.trelloService.getListsStatus(boardId)
  }
}
</script>
