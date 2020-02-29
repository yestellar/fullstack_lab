<template>
  <div class="home">
    <Menu/>
    <b-container>
      <Carousel/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Carousel from '@/components/Carousel.vue'


export default {
  name: 'Home',
  components: {
    Menu,
    Carousel
  }
}
</script>
