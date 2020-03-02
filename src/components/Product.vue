<template lang="html">
  <div class="product-item" style="margin-bottom: 100px">
    <b-card
      :title="product.name"
      :img-src="getImageSrc()"
      img-alt="Image"
      img-top
      class="card-item"
    >
      <b-card-sub-title class="mb-2">${{ product.price }}</b-card-sub-title>
      <b-card-body class="p-2">
      </b-card-body>
      <b-button class="w-100" id="show-btn" @click="sendProductToModal">Read more</b-button>
    </b-card>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'product',
  props: ['productId'],
  computed: mapGetters(['allProducts']),
  data() {
    return {
      product: undefined,
      productPhoto: undefined
    }
  },
  methods: {
    getImageSrc() {
      return "https://picsum.photos/400/?image=" + this.product.photoId
    },
    findProductById() {
      this.allProducts.forEach((item, i) => {
        if (item.id == this.productId) {
          this.product = item
        }
      })
    },
    sendProductToModal() {
      this.$emit('openmodal', this.product)
    }
  },
  created() {
    this.findProductById()
  }
}
</script>

<style lang="sass" scoped>
  .card-item
    box-shadow: inset -1px -1px 6px rgba(0,0,0,.1)
</style>
