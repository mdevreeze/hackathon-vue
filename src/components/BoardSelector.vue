
<template>
  <div>
  <section class="section">
  <b-field label="Select board">
    <b-select placeholder="Select a board" v-model="selectedBoard" style="text-align: center">
      <option
        v-for="b in boards"
        :value="b.id"
        :key="b.id"
      >{{ b.name }}</option>
    </b-select>
  </b-field>
  <Status :board="selectedBoard" />
  </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Status from './Status.vue'
import { TrelloService } from '../logic/trello-service'
import Component from 'vue-class-component'

@Component({
  components: {
    Status
  }
})
export default class BoardSelector extends Vue {
  private trelloService: TrelloService = new TrelloService()
  public boards: { name: string; id: string }[] = []
  public selectedBoard: string = ''

  mounted() {
    this.trelloService
      .getBoards()
      .then(boards => {
        boards.forEach((b: any) => {
          this.boards.push({ name: b.name, id: b.id })
        })
      })
      .catch(console.error)
  }
}
</script>
