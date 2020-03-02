<template lang="html">
  <div id="navbar">
    <b-navbar toggleable="lg" type="light" variant="light" class="header" fixed="top">

      <b-container>

        <b-navbar-brand to="/" class="ml-1 mr-0 mr-lg-3"><b-icon icon="terminal-fill" font-scale="1.2" class="mr-1"></b-icon>{{ projectName }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
            <b-container class="header__form-container p-0" fluid>
              <b-nav-form class="pt-2 pt-md-0">
                <b-form-input size="sm" style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;" placeholder="Search"></b-form-input>
                <b-button size="sm" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;" type="submit">Search</b-button>
              </b-nav-form>
            </b-container>

          <b-navbar-nav class="ml-auto">
            <!-- Cart dropdown -->
            <b-nav-item class="d-flex w-100" to="/cart">
              <b-icon icon="heart-fill" font-scale="1.1"></b-icon>
              <span class="ml-1">Cart</span>
              <!-- <span class="header__cartCount">{{ cartItems }}</span> -->
              <b-badge variant="danger" class="ml-1" v-show="cartItems > 0">{{ cartItems }}</b-badge>
            </b-nav-item>
            <!-- Profile dropdown -->
            <b-nav-item class="d-flex w-100" href="#">
              <b-icon icon="person-fill" font-scale="1.1"></b-icon>
              <span class="ml-1">Profile</span>
            </b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      projectName: "FULLSTACK PROJECT"
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.length
    }
  }
}
</script>

<style lang="sass" scoped>

  *:focus
    outline: none

  .header
    &__form-container
      li, form
        width: 100%
      @media (max-width: 576px)
      form
        input
          width: 225px
    .nav-link
      display: flex
      align-items: center
</style>
