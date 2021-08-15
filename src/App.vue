<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo" />
            Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }">
            Build
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" :to="{ name: 'Cart' }">
            Cart
          </router-link>
          <div class="cart-items">
            {{ cart.length }}
          </div>
        </li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <aside class="aside">
      <router-view name="sidebar" />
    </aside>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState('robots', ['cart']),
  },
};
</script>

<style>
html {
  font-family: 'Roboto', 'sans-serif';
}
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
button {
  cursor: pointer;
}
</style>

<style scoped>
main {
  padding: 30px;
  background-color: white;
  flex: 1;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 100%;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
