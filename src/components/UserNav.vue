<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue3 Demo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ml-auto">
          <router-link to="/login" class="nav-link">管理員登入</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then((res) => {
          console.log(res)
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
.ml-auto{
  margin-left: auto;
}
</style>
