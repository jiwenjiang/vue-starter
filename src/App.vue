<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
<!--    <Map></Map>-->
    <router-view/>
  </div>
</template>
<script>
// import Map from '@/components/map/map'
import http from '@/services/http'
import url from '@/config/url/common'

export default {
  name: 'home',
  components: {
    // Map
  },
  mounted() {
    http.get(url.mapService, (succ) => {
      console.log('succ', succ)
    }, (err) => {
      console.log('err', err)
    })
  }
}
</script>

<style lang="less">
@import "~normalize.css";
#app{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
