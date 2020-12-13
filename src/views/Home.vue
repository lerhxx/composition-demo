<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from '../plugins/store'

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  setup(props, { root }) {
    // const store = useStore()
    console.log('hello', root.$store, root.$router)
    return {
      // store
    }
  }
};
</script>
