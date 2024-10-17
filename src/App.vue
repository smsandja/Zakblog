<script>
import { RouterLink, RouterView } from 'vue-router'
export default {}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="logo">logo</div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper .logo {
  display: inline;
  margin-left: 0;
  padding: 10px;
}

nav {
  width: 100%;
  font-size: 18px;
  margin-top: 2px;
  text-align: right;
  padding: 20px;
  color: black;
  background: white;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline;
  padding: 20px;
  text-align: right;
  color: rgba(4, 120, 87);
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

nav a:first-of-type {
  border: 0;
}
.container {
  margin: 20px 10px 10px 20px;
}
</style>
