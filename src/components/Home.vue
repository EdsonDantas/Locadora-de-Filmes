<template>
  <b-row>
    <!-- essa tag substitui a "b-row #app" quando usamos o bootstrap com vue-->
    <b-container>
      <!-- essa tag substitui "b-row" quando usamos o bootstrap com vue-->
      <b-row>
        <h2>{{ title }}</h2>
      </b-row>

      <b-row>
        <b-button class="btn-carrinho" variant="outline-primary">
          Carrinho: {{ quantidadeNoCarrinho }} filmes
        </b-button>
      </b-row>

      <!--Vitrine com os filmes para aluguel-->
      <b-row >
        <ListarFilmes :carrinho="carrinho"/>
      </b-row>
    </b-container>
  </b-row>
</template>


<script>


import ListarFilmes from './ListarFilmes.vue';



export default {
  name: "Home",
  components: {
    ListarFilmes,
  },

  data() {
    return {
      title: "Locadora de Filmes",
      //mostrarFilmes tem que iniciar como true para poder mostrar a Home.
      mostrarFilmes: true,
     
      carrinho: [],
    };
  },

  methods: {
    
  },

  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;1,300&display=swap");

body {
  width: 100%;
  font-family: "Roboto", sans-serif;
}

.nav-bar {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.row {
  width: 100%;
  justify-content: center;
}
.cards {
  display: flex;
  flex-wrap: inherit;
  justify-content: space-around;
}

.mb-2 {
  transform: scale(0.97);
  transition: ease 0.5s;
}
.mb-2:hover {
  transform: scale(1);
  transition: ease 0.5s;
}

.btn-carrinho {
  margin-bottom: 20px;
}

</style>
