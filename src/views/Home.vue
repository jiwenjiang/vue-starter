<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import http from '@/services/http'
import url from '@/config/url/common'

export default {
  name: 'home',
  components: {
    HelloWorld
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
