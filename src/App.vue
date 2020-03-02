<template>
  <div id="app">
    <Navbar/>
    <router-view class="viewWindow"/>
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

.viewWindow
  margin-top: 56px

.breadcrumb-container
  border-top: 1px solid rgba(0,0,0,.1)
  background-color: #f8f9fa

</style>
