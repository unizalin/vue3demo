<template>
  <Loading :active="isLoading"></Loading>
  <ToastMessages></ToastMessages>
  <div class="container">
    <div class="sticky-top">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 110px">數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"
                      :disabled="cartLoadingItem === item.id"
                      @click="removeCartItem(item.id)">
                <i class="bi bi-x"></i>
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <input type="number" class="form-control" min="1" v-model.number="item.qty" @change="updateCart(item)"  :disabled="this.cartLoadingItem===item.id">
                <div class="input-group-text">/ {{ item.product.unit }}</div>
              </div>
            </td>
            <td class="text-end">
              <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
              {{ $filters.currency(item.final_total) }}
            </td>
          </tr>
        </template>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ $filters.currency(cart.total) }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
        </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
            套用優惠碼
          </button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-danger ml-auto" >
      <router-link to="/user/cart" class="nav-link">結帳去</router-link>
    </button>
  </div>
</template>
<script >
import { mapActions, mapState } from 'pinia'
import statusStore from '../stores/statusStore'
import cartStore from '../stores/cartStore'
import ToastMessages from '@/components/ToastMessage.vue'

export default {
  data () {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    ToastMessages
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'getCart', 'updateCart', 'removeCartItem']),
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon })
        .then((res) => {
          this.isLoading = false
          console.log(res)
          this.getCart()
        })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
          const checkoutId = res.data.orderId
          this.$router.push(`/user/checkout/${checkoutId}`)
        })
    }
  },
  created () {
    this.getCart()
  }
}

</script>
