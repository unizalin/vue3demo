<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" v-model="user.username" class="form-control" placeholder="Email address" required autofocus/>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" v-model="user.password" class="form-control" placeholder="Password" required />
        </div>
        <div class="text-end mt-4">
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('signIn')
      const api = `${process.env.VUE_APP_API}admin/signin`
      console.log(api)
      this.axios.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashbord/products')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>
