<script>
export default {
  name: "Products",
  props: {
    name: String,
  },
};
</script>

<template>
  <div class="products">
    <h2>Product : {{ name }}</h2>
  </div>
</template>

<style scoped>
.products {
  padding: 10px;
  width: 200px;
  background-color: rgb(70, 138, 168);
  margin: 4px;
}
</style>