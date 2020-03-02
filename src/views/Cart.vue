<template lang="html">
  <div class="cart">
    <!-- breadcrumb -->
    <b-navbar type="light" variant="light" class="p-0">
      <b-container class="pl-3 pr-3">
        <b-breadcrumb class="m-0 w-100 breadcrumb-container">
          <b-breadcrumb-item to="/">
            <b-icon icon="house-fill" scale="1.25" shift-v="1" aria-hidden="true"></b-icon>
            Home
          </b-breadcrumb-item>
          <b-breadcrumb-item active>{{ $route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </b-navbar>
    <!-- cartCards -->
    <b-container>
      <CartProductCard v-for="product in getCartProducts" :product="product" @countchange="getTotalPrice" @removeproduct="removeproduct(product)" :key="product.id"/>
    </b-container>
    <!-- totalPrice -->
    <b-container class="totalInfo mt-2 text-center">
      <span align="right">Total price: ${{ totalPrice }}</span>
      <b-button class="ml-2" variant="success" @click="buyAction">Buy</b-button>
    </b-container>
  </div>
</template>

<script>

import CartProductCard from '@/components/CartProductCard.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cart',
  data() {
    return {
      totalPrice: undefined
    }
  },
  computed: mapGetters(['getCartProducts']),
  components: {
    CartProductCard
  },
  methods: {
    ...mapMutations(['removeProduct']),
    getTotalPrice () {
      this.totalPrice = 0
      this.getCartProducts.forEach((item, i) => {
        let totalItemPrice =  item.count * item.price
        this.totalPrice += totalItemPrice
      });
    },
    buyAction() {
      alert("Buy action")
    },
    removeproduct(product) {
      this.removeProduct(product.id)
      this.getTotalPrice()
    }
  },
  mounted() {
    this.getTotalPrice()
  }
}

</script>

<style lang="sass" scoped>
  .cart
    &__item
      .info-container
        .name
          font-size: 25px
          letter-spacing: 1px
        .description
          color: rgba(0,0,0,0.6)

      .price-container
        height: transparent
        .price
          font-size: 22px

    .totalInfo
      display: flex
      justify-content: center
      align-items: center
      span
        font-size: 22px
      button

</style>
