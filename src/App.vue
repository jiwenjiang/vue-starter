<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {},
  beforeCreate() {
    this.$router.push('/')
  },
  mounted() {
  }
}
</script>

<style lang="less">
@import "~normalize.css";

#app {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
