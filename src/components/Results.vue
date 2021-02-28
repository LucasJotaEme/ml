<template src="./Results.html"></template>

<script>
import List from "./List";
import Product from "./Product";
import axios from "axios";
import Global from "../Global";

export default {
  name: "Results",
  components: {
    List,
    Product,
  },
  data() {
    return {
      search: "",
      limit: 4,
      results: [],
      categories: [],
    };
  },
  mounted() {
    this.search = this.$route.params.q;
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get(Global.url + Global.search, {
          params: {
            q: this.search,
            limit: this.limit,
          },
        })
        .then((result) => {
          this.results = result.data.results;
          this.getCategories();
        })
    },
    getCategories() {
      axios
        .get(Global.url + Global.categories + this.results[0].category_id)
        .then((result) => {
          this.categories = result.data.path_from_root;
        });
    },
  },
};
</script>