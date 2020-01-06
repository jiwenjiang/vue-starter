<template>
  <div class="home">
    <Map msg="Welcome to Your Map"/>
    <router-view/>
  </div>
</template>

<script>
import Map from '@/components/map/map'
import http from '@/services/http'
import url from '@/config/url/common'

export default {
  name: 'home',
  components: {
    Map
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
