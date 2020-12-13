<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { defineComponent } from '@vue/composition-api'
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./views/Home.vue";

import { useRouter } from './plugins/router'
export default defineComponent({
  components: {
    HelloWorld,
    Home
  },
  setup(props: any, { root }: any) {
    // const router = useRouter()
    console.log('app', root.$router)
    // return {
    //   router
    // }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
