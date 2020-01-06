<template>
    <div class="application">
        application
    </div>
</template>

<script>
import http from '@/services/http'
import url from '@/config/url/common'

export default {
  name: 'application',
  components: {},
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
.application {
    position: absolute;
    left: 0;
    top: 200px;
    z-index: 1;
    /*width: 400px;*/
    /*height: 400px;*/
    /*background: yellow;*/
}
</style>
