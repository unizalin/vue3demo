<template>
  <!-- 請同學自行新增 v-model -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-s" role="document">
    <div class="modal-content border-0"  ref="modal">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-6">
            是否要確定刪除{{tempProduct.content}}項目
          </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="delModal(tempProduct.id)"
          >
            確認
          </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/mixinModal'
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  data () {
    return {
      modal: { },
      tempProduct: {}
    }
  },
  methods: {
    delModal (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      console.log(api)
      this.$http.delete(api)
        .then((res) => {
          console.log(res)
          this.hideModal()
        })
    }
  },
  mixins: [modalMixin]
}
</script>
