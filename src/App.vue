<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script type="text/javascript">

  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }

</script>

<style lang="sass">

*
  font-family: 'Roboto', Avenir, sans-serif



</style>
