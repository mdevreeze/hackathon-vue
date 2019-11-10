<template>
<div class="container">
  <div class="notification">
    <BoardSelector />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import BoardSelector from '../components/BoardSelector.vue'

export default {
  name: 'home',
  components: {
    BoardSelector
  }
}
</script>
