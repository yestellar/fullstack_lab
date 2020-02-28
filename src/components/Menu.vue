<template lang="html">
  <div class="menu">
    <b-navbar toggleable="lg" type="light" variant="light">

          <template v-if="!isMenuSmall">
            <b-nav class="m-auto">
              <b-nav-item href="#" class="menu__menu-item" disabled>menu:</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>TOMMY HILFIGER</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>RALPH LAUREN</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>LOUIS VUITTON</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>HOUSE OF VERSACE</b-nav-item>
            </b-nav>
          </template>
          <template v-if="isMenuSmall">
            <b-button variant="light" @click="isMenuSmallOpen = !isMenuSmallOpen" style="width: 100%">menu
              <b-icon v-if="!isMenuSmallOpen" icon="chevron-compact-down"></b-icon>
              <b-icon v-if="isMenuSmallOpen" icon="chevron-compact-up"></b-icon>
            </b-button>
            <b-nav class="m-auto pt-2" vertical v-if="isMenuSmallOpen">
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>TOMMY HILFIGER</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>RALPH LAUREN</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>LOUIS VUITTON</b-nav-item>
              <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>HOUSE OF VERSACE</b-nav-item>
            </b-nav>
          </template>

      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      isMenuSmall: false,
      isMenuSmallOpen: false
    }
  },
  mounted() {
    let menuItems = document.getElementsByClassName('menu__menu-item')
    let menuWidth = 0
    menuItems.forEach((item, i) => {
      menuWidth += item.offsetWidth
    });
    if (menuWidth > window.innerWidth) this.isMenuSmall = true
  }
}
</script>

<style lang="sass" scoped>
  .menu
    border-top: 1px solid #ddd
</style>
