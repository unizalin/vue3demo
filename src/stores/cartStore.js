import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('cartStore', {
  state: () => {
    return {
      cart: {}
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.cartLoadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      axios.post(url, { data: cart })
        .then((res) => {
          status.cartLoadingItem = ''
          console.log('res', res)
          status.pushMessage({ title: '加入購物車' })
          this.getCart()
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      axios.get(url)
        .then((res) => {
          status.cartLoadingItem = ''
          this.cart = res.data.data
          console.log('getCart', res)
        })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      status.cartLoadingItem = item.id
      console.log('updateCart', item.id, item.product_id)
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart })
        .then((res) => {
          console.log(res)
          status.cartLoadingItem = ''
          this.getCart()
          this.isLoading = false
        })
    },
    removeCartItem (id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      axios.delete(url)
        .then((res) => {
          // axiosMessageState(res, '移除購物車品項')
          status.pushMessage({ title: '移除購物車品項' })
          status.cartLoadingItem = ''
          this.getCart()
          this.isLoading = false
        })
    }
  }
})
