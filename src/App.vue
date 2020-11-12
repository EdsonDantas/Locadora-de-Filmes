<template>
  <b-row>
    <b-navbar class="nav-bar" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item @click="mostrarCarrinho = true" href="#">Home</b-nav-item>
        <b-nav-item @click="mostrarCarrinho = false" href="#"
          >Carrinho</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <!-- essa tag substitui a "b-row #app" quando usamos o bootstrap com vue-->
    <b-container>
      <!-- essa tag substitui "b-row" quando usamos o bootstrap com vue-->
      <b-row>
        <h2>{{ title }}</h2>
      </b-row>

      <b-row>
        <HelloWorld msg="" />
      </b-row>

      <b-row>
        <b-button class="btn-carrinho" variant="outline-primary">
          Carrinho: {{ quantidadeNoCarrinho }} filmes
        </b-button>
      </b-row>

      <!--Vitrine com os filmes para aluguel-->
      <b-row v-show="mostrarCarrinho">
        <b-row class="cards">
          <b-card
            :key="filme.id"
            v-for="filme in filmes"
            :id="filme.id"
            :title="filme.titulo"
            :img-src="filme.imagem"
            :img-alt="filme.titulo"
            tag="article"
            style="max-width: 15rem"
            class="mb-2"
          >
            <b-card-text>
              {{ filme.descricao }}
            </b-card-text>

            <b-row>
              R$ {{ filme.valor}},00
            </b-row>

            <!--Avalição pelas estrelas-->
            <b-card-text>
              <b-icon
                icon="star-fill"
                variant="warning"
                v-for="estrelas in filme.avaliacao"
                :key="estrelas"
              ></b-icon>
              <b-icon
                icon="star"
                variant="warning"
                v-for="estrelas_vazadas in 5 - filme.avaliacao"
                :key="'star' + estrelas_vazadas"
              ></b-icon>
            </b-card-text>

            <!--Configuração dos botões para 'alugar', 'ultima unidade' e 'esgotado'-->
            <b-button
              class="btn-alugar"
              v-if="filme.estoqueDisponivel > 1"
              href="#"
              block
              variant="dark"
              @click="adicionarAoCarrinho(filme)"
            >
              ALUGAR</b-button
            >
            <b-button
              v-else-if="filme.estoqueDisponivel == 1"
              variant="warning"
              @click="adicionarAoCarrinho(filme)"
            >
              ÚLTIMA UNIDADE</b-button
            >
            <b-button v-else href="#" block variant="danger" disabled>
              ESGOTADO</b-button
            >
          </b-card>
        </b-row>
      </b-row>

      <!--Tabela com o resumo de filmes alugados na 'nav' carrinho-->
      <b-row v-show="!mostrarCarrinho" class="meu-carrinho">
        
        <ResumoPedido :carrinho="carrinho"/> 
        <DadosForm />
      </b-row>
    </b-container>
  </b-row>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import HelloWorld from "./components/HelloWorld.vue";
import DadosForm from "./components/DadosForm.vue";
import ResumoPedido from "./components/ResumoPedido.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    DadosForm,
    ResumoPedido,
  },

  data() {
    return {
      title: "Locadora de Filmes",
      mostrarCarrinho: true,
      filmes: [
        {
          id: 1,
          titulo: "Hulk",
          descricao: "Um Filme Ruim",
          valor: 2,
          avaliacao: 1,
          imagem: "https://i.imgur.com/0uthCmp.jpg",
          estoqueDisponivel: 4,
        },
        {
          id: 2,
          titulo: "Homem de Ferro",
          descricao: "Homem de Ferro",
          valor: 10,
          avaliacao: 3,
          imagem: "https://i.imgur.com/OA8pDFM.jpg",
          estoqueDisponivel: 6,
        },
        {
          id: 3,
          titulo: "Thor",
          descricao: "Filme mais ou menos ruim ",
          valor: 7,
          avaliacao: 2,
          imagem: "https://i.imgur.com/mt4ZRzw.jpg",
          estoqueDisponivel: 3,
        },
        {
          id: 4,
          titulo: "Capitão América",
          descricao: "Um filme de capitão",
          valor: 10,
          avaliacao: 3,
          imagem: "https://i.imgur.com/UFmSVtZ.jpg",
          estoqueDisponivel: 7,
        },
        {
          id: 5,
          titulo: "Doutor Estranho",
          descricao: "Filme muito louco de Magia",
          valor: 10,
          avaliacao: 4,
          imagem: "https://i.imgur.com/pVEDruM.jpg",
          estoqueDisponivel: 3,
        },
        {
          id: 6,
          titulo: "Pantera Negra",
          descricao: "Filme bom, tchala é brabo e porradeiro",
          valor: 20,
          avaliacao: 4,
          imagem: "https://i.imgur.com/JOSEGKf.jpg",
          estoqueDisponivel: 4,
        },
        {
          id: 7,
          titulo: "Vingadores - Guerra Infinita",
          descricao: "Um dos melhores",
          valor: 25,
          avaliacao: 5,
          imagem:
            "https://i.pinimg.com/originals/7a/60/bc/7a60bcd9174a020f0523358d95609f9b.jpg",
          estoqueDisponivel: 5,
        },
        {
          id: 8,
          titulo: "Capitã Marvel",
          descricao: "b-rowertido, mas podia ser melhor",
          valor: 15,
          avaliacao: 3,
          imagem:
            "https://i.pinimg.com/originals/cc/f5/30/ccf53081983d347d1b312a5dcf38ba0e.jpg",
          estoqueDisponivel: 3,
        },
      ],
      carrinho: [],
    };
  },

  methods: {
    adicionarAoCarrinho: function (filme) {
      if (filme.estoqueDisponivel > 0) {
        let indexFilme = this.carrinho.findIndex((obj) => obj.id == filme.id);
        filme.quantidade = (filme.quantidade || 0) + 1;

        if (indexFilme == -1) {
          filme.preço = `R$${filme.valor},00`;
          this.carrinho.push(filme);
        } else {
          this.carrinho.splice(indexFilme, 1, filme);
        }

        filme.estoqueDisponivel -= 1;
      }
    },
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
.col-12 {
  display: block;
  width: 100%;
}
.form-group:hover {
  background-color: aqua;
}
</style>
