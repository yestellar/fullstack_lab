<template lang="html">
  <div class="menu">
    <b-navbar toggleable="lg" type="light" variant="light">
          <b-container fluid>
            <button type="button" class="menu__button p-1" @click="openHideMenu()">menu <b-icon icon="chevron-down"></b-icon></button>
            <b-nav class="m-auto" variant-info type="light">
              <div id="cols_container" class="menu__cols-container">
                <b-row cols="1" class="pt-1 pt-md-0">
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>TOMMY HILFIGER</b-nav-item>
                  </b-col>
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>GUCCI</b-nav-item>
                  </b-col>
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>RALPH LAUREN</b-nav-item>
                  </b-col>
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>HOUSE OF VERSACE</b-nav-item>
                  </b-col>
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item" style="color: red"><b-icon class="mr-2" icon="dot" ></b-icon>ARMANI</b-nav-item>
                  </b-col>
                  <b-col col md="4" xl="auto">
                    <b-nav-item href="#" class="menu__menu-item"><b-icon class="mr-2" icon="dot"></b-icon>LOUIS VUITTON</b-nav-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav>
          </b-container>

      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'menu',
  methods: {
    openHideMenu() {
      document.getElementById('cols_container').classList.toggle('active')
    }
  }
}
</script>

<style lang="sass" scoped>
  .menu
    border-top: 1px solid #ddd
    &__button
      width: 100%
      background-color: #f8f9fa
      &:focus
        outline: none

    &__cols-container
      display: none
      &.active
        display: block

      .nav-link
        color: #7c7c7d
        letter-spacing: .4px
        &:hover
          color: rgba(0,0,0,.8)

    @media (min-width: 768px)
      &__button
        display: none

      &__cols-container
        display: block

</style>
