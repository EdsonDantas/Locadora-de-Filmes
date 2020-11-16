<template>
  <b-navbar class="nav-bar" type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item >
        <router-link to="/">Home</router-link>
        </b-nav-item>
      <b-nav-item >Carrinho</b-nav-item>

      <b-nav-item >
        <router-link to="/form">Formulário</router-link>
        </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
