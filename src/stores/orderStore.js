import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('orderStore', {
  state: () => {
    return {
      orders: {}
    }
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      status.isLoading = true
      axios.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        status.isLoading = false
        console.log(response)
      })
    }
  }
})
