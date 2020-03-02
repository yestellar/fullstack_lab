<template lang="html">
  <div class="fresh-catalog">
    <h2>The freshest and most exciting</h2>
    <!-- Products list -->
    <b-row cols="2">
      <b-col col md="3" v-for="product in allProducts" :key="product.id">
        <Product :productId="product.id" @openmodal="openModal($event)"></Product>
      </b-col>
    </b-row>
    <!-- Modal window -->
  <Modal :product="product"/>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Modal from '@/components/Modal.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "FreshCatalog",
  components: {
    Product,
    Modal
  },
  data() {
    return {
      product: undefined
    }
  },
  computed: mapGetters(['allProducts']),
  methods: {
    ...mapActions(['fetchProducts']),
    openModal(product) {
      this.product = product
      this.$bvModal.show('product_modal')
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style lang="sass" scoped>
  .fresh-catalog
    h2
      font-family: 'Great Vibes', cursive
      font-size: 30px
      color: rgba(0,0,0,0.6)
      text-shadow: 1px 1px 3px rgba(0,0,0,0.2)
      text-align: left

    @media (min-width: 576px)
      h2
        font-size: 50px
</style>
