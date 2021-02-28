<template src="./SearchBox.html"></template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      query: "",
    };
  },
  methods: {

    search() {
      // Paso por parámetro la query, y llamó al componente.
      this.$router.push("/api/items/" + this.query);
    },
  },
};
</script>