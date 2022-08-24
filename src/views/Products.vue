<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn  btn-primary" type="button" @click="openModal(true)"> 增加一個</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product , idx) in productsPage" :key="idx">
        <td>{{product.category}}</td>
        <td>{{product.title}}</td>
        <td class="text-right">{{$filters.currency(product.origin_price)}}</td>
        <td class="text-right">{{$filters.currency(product.price)}}</td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span class="text-success" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,product)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="dalModal(product)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :product="tempProduct"></DelModal>
  <Pagination v-if="pagination" :pages="pagination" @emit-pages="getProductPage"></Pagination>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
import { mapActions, mapState } from 'pinia'
import productsStore from '../stores/productsStore'
import statusStore from '../stores/statusStore'
export default {
  data () {
    return {
      tempProduct: {},
      isNew: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productsStore, ['productsPage', 'pagination']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(productsStore, ['getProductPage']),
    openModal (isNew, item) {
      console.log(isNew, item)
      if (this.isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    dalModal (item) {
      this.tempProduct = { ...item }
      // this.$refs 直接取代 ＄()
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updateProduct (item) {
      console.log(item)
      // 新增方式
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 利用 data isNew 判定是否已存在來編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.isLoading = true
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res)
          productComponent.hideModal()
          if (res.data.success) {
            console.log('success true')
            this.getProductPage()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
          this.isLoading = false
        })
    }
  },
  created () {
    this.getProductPage()
  }
}
</script>
