<template>
  <div class="home">
    <Menu/>
    <b-container class="carousel-container">
      <Carousel/>
    </b-container>
    <b-container class="fresh-container">
      <FreshCatalog/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Carousel from '@/components/Carousel.vue'
import FreshCatalog from '@/components/FreshCatalog.vue'


export default {
  name: 'Home',
  components: {
    Menu,
    Carousel,
    FreshCatalog
  }
}
</script>

<style lang="sass">
  .fresh-container
    margin-top: 50px
</style>
