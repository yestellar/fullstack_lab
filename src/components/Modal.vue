<template lang="html">
  <div class="modal">
    <b-modal id="product_modal" size="lg" class="modal" hide-footer centered>
      <template v-slot:modal-title>
        {{ product.name }}
      </template>
      <b-container class="p-0">
        <b-row cols="12">
          <b-col cols="6">
            <b-img :src="getImageSrc()" alt="Responsive image" fluid></b-img>
          </b-col>
          <b-col cols="6">
            <div class="modal__description-wrapper">
              <span>Description:</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="modal__price-wrapper mt-4">
              <b-form @submit.prevent="addToCart">
                <b-row cols="12">
                  <b-col cols="6" class="d-flex justify-content-center align-items-center">
                    <span>Total price: ${{ totalModalPrice }}</span>
                  </b-col>
                  <b-col cols="6">
                    <b-form-spinbutton id="sb-wrap" wrap min="1" max="25" v-model="totalModalCount"></b-form-spinbutton>
                  </b-col>
                </b-row>
                <b-row cols="12">
                  <b-col cols="12">
                    <b-button type="submit" class="w-100 mt-4" variant="success">Add to cart</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'modal',
  props: ['product'],
  data() {
    return {
      totalModalPrice: 0,
      totalModalCount: 1,
      imageUrl: undefined
    }
  },
  methods: {
    ...mapActions(['addItemToCartAction']),
    getImageSrc() {
      if (this.product !== undefined) {
        return "https://picsum.photos/400/?image=" + this.product.photoId
      }
    },
    addToCart() {
      this.product.count = this.totalModalCount
      this.addItemToCartAction(this.product)
      this.$emit('closemodal')
      this.totalModalCount = 1
    }
  },
  watch: {
    product (value) {
      this.totalModalPrice = this.product.price
      this.totalModalCount = 1
    },
    totalModalCount (value) {
      this.totalModalPrice = this.product.price * value
    }
  }
}
</script>
<style lang="sass" scoped>
.modal
  &__description-wrapper
    border-bottom: 1px solid rgba(0,0,0,.1)
    span
      color: rgba(0,0,0,.5)

  &__count-input
    padding-left: 10px
    box-sizing: border-box
    border: 1px solid rgba(0,0,0,.3)
    border-radius: 5px
</style>
