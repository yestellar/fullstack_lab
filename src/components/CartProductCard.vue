<template lang="html">
  <div class="cartProductCard">
    <b-card
    class="cart__item mt-3"
    :img-src="getImageSrc()"
    img-left
    >
      <b-card-body class="p-0">
        <b-row cols="12" align-v="center">
          <b-col cols="6" class="info-container">
            <span class="name">{{ product.name }}</span>
            <div class="w-100"></div>
            <span class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </b-col>
          <b-col cols="2" class="amount-container ml-5">
            <b-form-spinbutton id="sb-wrap" wrap min="1" max="25" v-model="productCount" @change="changeProductCount"></b-form-spinbutton>
          </b-col>
          <b-col cols="2" class="price-container">
            <span class="price">${{ totalPrice }}</span>
          </b-col>
          <b-col cols="2" class="remove-container">
            <b-icon icon="bucket"></b-icon>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'cartProductCard',
  props: ['product'],
  data() {
    return {
      totalPrice: 0
    }
  },
  computed: {
    productCount: {
      set(val) {
        this.product.count = val
        this.setProductCountAction(this.product)
      },
      get() {
        return this.product.count
      }
    },
    productPrice() {
      return this.product.price
    }
  },
  methods: {
    ...mapActions(['setProductCountAction']),
    getImageSrc() {
      if (this.product !== undefined) {
        return "https://picsum.photos/150/?image=" + this.product.photoId
      }
    },
    changeProductCount(value) {
      this.totalPrice = this.productPrice * value
      this.$emit('countchange')
    }
  },
  mounted() {
    this.totalPrice = this.productPrice * this.productCount
  }
}
</script>

<style lang="css" scoped>
</style>
