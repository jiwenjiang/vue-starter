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
    http.get(url.uidConfig, { id: '7d5b53fbd7e8430989618007ea8b740b' }, (succ) => {
      console.log('succ', succ)
      setTimeout(() => {
        document.dispatchEvent(new Event('render-event'))
      }, 25000)
    }, (err) => {
      console.log('err', err)
    })
  }
}
</script>
