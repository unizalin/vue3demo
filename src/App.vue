<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/dashbord">Dashbord</router-link>

  </div>
  <div class="test">
    <div class="box1">
      <div class="content-title">TITLE</div>
      <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae nemo, unde nisi cum consectetur vel voluptates nulla. Vero expedita quasi labore! Cum, natus! Amet soluta dolores totam distinctio sed.</div>
    </div>
  </div>
  <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
  <router-view/>
</template>

<style lang="scss" scoped>
@import "./assets/all.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.box1{
  background-color: red;
  .title{
    background-color: blue;;
  }
}
</style>
