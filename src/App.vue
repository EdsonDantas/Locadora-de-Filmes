<template>
  <b-row>
    <Header />
    <router-view />
  </b-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from './components/Header.vue';

export default {
  name: "App",
  components: {
    Header,
  }
};
</script>