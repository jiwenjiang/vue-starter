<template>
  <div class="home">
    about
  </div>
</template>

<script>
import http from '@/services/http'
import url from '@/config/url/common'

export default {
  name: 'application',
  components: {
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
