<template src="./Detail.html"></template>

<script>
import List from "./List";
import axios from "axios";
import Global from "./../Global";

export default {
  name: "Detail",
  components: {
    List,
  },
  // Este prop es el que recibo de un componente padre, en este caso de Result.vue.
  props: ["categories"],

  data() {
    // Se definen las variables que utilizaré
    return {
      id: null,
      detail: {},
      description: "",
    };
  },
  // ciclo de vida de Vue, cuando el proyecto acaba de montarse.
  mounted() {
    // guardo el ID que recibo por parámetro.
    this.id = this.$route.params.id;
    this.getProduct();
    this.getDescription();
  },
  // Métodos
  methods: {
    getDescription() {
      // Petición a items description
      axios
        .get(Global.url + Global.items + this.id + Global.description)
        .then((result) => {
          // Guardo la description
          this.description = result.data.plain_text;
        });
    },
    getProduct() {
      // Busco el producto por el id recibido por parámetro
      axios.get(Global.url + Global.items + this.id).then((result) => {
        // Guardo el producto recibido
        this.detail = result.data;
        // Llamo para obtener las categorías que contiene el producto.
        // NOTA: Sé que está mal llamarla desde acá, pero no sé por qué no funcionaba llamándola desde el mounted.
        this.getCategory();
      });
    },
    getCategory() {
      // Obtengo las categorías
      axios
        .get(Global.url + Global.categories + this.detail.category_id)
        .then((result) => {
          // Las guardo
          this.categories = result.data.path_from_root;
        });
    },
  },
};
</script>
