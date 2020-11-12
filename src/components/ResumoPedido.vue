<template>
  <b-row class="table">
    <h3>Resumo de pedidos</h3>
    <b-table
      block
      striped
      hover
      dark
      responsive
      head-variant="light"
      :items="carrinho"
      :fields="fields"
    ></b-table>
    <b-row>
      <p>Total: R${{ somaPedido }},00</p>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "ResumoPedido",
  props: {
    carrinho: Array,
  },

  data() {
    return {
      fields: ["titulo", "quantidade", "preço"],
    };
  },

  computed: {
      somaPedido: function () {
      //usando o "reduce" para somar valores de um array.
      return this.carrinho.reduce(function (accumulator, filme) {
        return accumulator + filme.valor * filme.quantidade;
      }, 0);

      /*código simples para pequenas quantidades. Mas caso o número de somas seja muito grande, o ideal é usar a função "reduce"
      let total = 0
      for (let filme of this.carrinho){
        total += filme.quantidade * filme.valor
      }
      return total*/
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
