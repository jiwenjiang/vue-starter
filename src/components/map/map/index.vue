<template>
  <div class="map-container">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String
  },
  mounted() {
    console.log('entry map')
    setTimeout(() => {
      console.log('mapLoaded')
      this.$router.push('/map')
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map-container {
  width: 100vw;
  height: 100vh;
  background: gray;
}
</style>
