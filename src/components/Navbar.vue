<template lang="html">
  <div id="navbar">
    <b-navbar toggleable="lg" type="light" variant="light">

      <b-navbar-brand href="#" class="ml-1"><b-icon icon="terminal-fill" font-scale="1.2" class="mr-1"></b-icon>{{ projectName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <b-nav-form>
            <b-form-input size="sm" style="border-top-right-radius: 0px; border-bottom-right-radius: 0px; width: 400px" placeholder="Search"></b-form-input>
            <b-button size="sm" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav class="mr-2">
          <!-- Cart dropdown -->
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <b-icon icon="heart-fill" font-scale="1.1"></b-icon>
              <span class="mr-1">
                Cart
              </span>
            </template>
            <b-dropdown-item href="#">Cart item</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- Profile dropdown -->
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span class="mr-1">
                <b-icon icon="person-fill"></b-icon>
                Profile
              </span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        
      </b-collapse>

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
  }
}
</script>

<style lang="sass" scoped>
</style>
