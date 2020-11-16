<template>
  <b-container>
    <b-row>
      <ResumoPedido :carrinho="carrinho" />
    </b-row>
    <b-row>
      <b-row>
        <h3>Dados de Pagamento</h3>
      </b-row>
      <b-row class="col-12"
        ><!--pedido-->
        <form>
          <b-row class="form-group">
            <label for="pedido.primeiroNome">Primeiro nome</label>
            <input
              type="text"
              class="form-control"
              id="primeiroNome"
              placeholder="Digite o primeiro nome"
              v-model.trim.lazy="pedido.primeiroNome"
            />
          </b-row>
          <b-row class="form-group">
            <label for="ultimoNome">Último nome</label>
            <input
              type="text"
              class="form-control"
              id="ultimoNome"
              placeholder="Digite o último nome"
              v-model.trim.lazy="pedido.ultimoNome"
            />
          </b-row>
          <b-row class="form-group">
            <label for="endereco">Endereço</label>
            <input
              type="text"
              class="form-control"
              id="endereco"
              placeholder="Informe o seu endereço"
              v-model.trim.lazy="pedido.endereco"
            />
          </b-row>
          <b-row class="form-group">
            <label for="cidade">Cidade</label>
            <input
              type="text"
              class="form-control"
              id="cidade"
              placeholder="Informe a cidade"
              v-model.trim.lazy="pedido.cidade"
            />
          </b-row>
          <b-row class="form-group">
            <label for="estado">Estado</label>
            <select class="form-control" id="estado" v-model="pedido.estado">
              <option disabled value>Escolha um estado</option>
              <option
                v-for="(estado, key) in estados"
                v-bind:value="estado"
                v-bind:key="key"
              >
                {{ estado }}
              </option>
            </select>
          </b-row>
          <b-row class="form-group">
            <label for="cep">CEP</label>
            <input
              type="number"
              class="form-control"
              id="cep"
              placeholder="Digite o CEP de sua residência"
              v-model.number="pedido.cep"
            />
          </b-row>
          <!--Check box formulário-->
          <b-row class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="pagoNaEntrega"
              v-bind:true-value="pedido.simNaEntrega"
              v-bind:false-value="pedido.naoNaEntrega"
              v-model="pedido.pagoNaEntrega"
            />
            <label class="form-check-label" for="pagoNaEntrega"
              >Pago na entrega?</label
            >
          </b-row>
          <b-row class="form-group form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              id="manha"
              value="Manhã"
              v-model="pedido.entrega"
            />
            <label class="form-check-label" for="manha">Manhã</label>
          </b-row>
          <b-row class="form-group form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              id="tarde"
              value="Tarde"
              v-model="pedido.entrega"
            />
            <label class="form-check-label" for="tarde">Tarde</label>
          </b-row>
          <b-row class="form-group form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              id="noite"
              value="Noite"
              v-model="pedido.entrega"
            />
            <label class="form-check-label" for="noite">Noite</label>
          </b-row>

          <b-row class="form-group">
            <button
              type="submit"
              class="btn btn-dark btn-block"
              @click="submitFormulario"
            >
              Finalizar pedido
            </button>
          </b-row>
        </form>
      </b-row>
      <b-row class="col-12">
        <pre>
          Primeiro nome: {{ pedido.primeiroNome }}
          Último nome: {{ pedido.ultimoNome }}
          Endereço: {{ pedido.endereco }}
          Cidade: {{ pedido.cidade }}
          Estado: {{ pedido.estado }}
          CEP: {{ pedido.cep }}
          Pago na entrega?: {{ pedido.pagoNaEntrega }}
          Entrega: {{ pedido.entrega }}
        </pre>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import ResumoPedido from './ResumoPedido.vue'

export default {
  name: "DadosForm",
  components: {
    ResumoPedido,
  },

  data() {
    return {
      carrinho: [],
      pedido: {
        primeiroNome: "",
        ultimoNome: "",
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        pagoNaEntrega: "Não",
        simNaEntrega: "Sim",
        naoNaEntrega: "Não",
        entrega: "Manhã",
      },
      estados: {
        RJ: "Rio de Janeiro",
        MG: "Minas Gerais",
        SP: "São Paulo",
        ES: "Espírito Santo",
      },
    };
  },

  methods: {
    submitFormulario() {
      alert("Pedido finalizado");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-12 {
  width: 90%;
}

.form-group {
  width: 100%;
}

.form-control {
  width: 100%;
}
</style>
