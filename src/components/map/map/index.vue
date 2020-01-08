<template>
  <div class="map-container" id="Map">
    {{ msg }}
  </div>
</template>

<script>
/*eslint-disable*/

// import mapboxgl from 'mapbox-gl'
import * as creeper from '../../../../lq_vender/mapbox-gl'

import config from '@/config'

export default {
  name: 'Map',
  props: {
    msg: String
  },
  mounted() {
    creeper.CreeperConfig.token = 'bG9jYXRpb246NGFiYWE1NzI2ODc0YWIwY2IwMDhkY2RkNzBkYzQ3ZWM='
    setTimeout(() => {
      console.log('torender')
      const map = new creeper.VectorMap('Map', 1, config.mapUrl + '/')
      console.log('map', map)
      map.on('load', () => {
        console.log('mapLoaded1')
        // this.$router.push('/map')
      })
    }, 1100)
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg'
    // var map = new mapboxgl.Map({
    //   container: 'map', // container id
    //   style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    //   center: [-74.5, 40], // starting position [lng, lat]
    //   zoom: 9 // starting zoom
    // })
    // document.dispatchEvent(new Event('render-event'))
    // setTimeout(() => {
    //   this.$router.push('/map')
    // }, 2000)
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
