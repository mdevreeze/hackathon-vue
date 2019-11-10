<template>
  <div id="app">
    <b-navbar type="is-dark">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <p>Trello Burndown</p>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
