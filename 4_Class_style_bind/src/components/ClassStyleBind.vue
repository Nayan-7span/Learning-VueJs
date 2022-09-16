<script>
export default {
  name: "ClassStyleBind",
  props: {},
  data() {
    return{
        iscolor: true
    }
  },
  method: {},
};
</script>

<template>
  <div>
    <h1 class="h1class">Simple Class Bind</h1>
    <h1 v-bind:style="{backgroundColor: 'rgb(218, 137, 137)'}">inline Style Binding</h1>
    <h1 v-bind:class="{redcolor:iscolor}">Vue Class Binding</h1>
  </div>
</template>

<style scoped>
.h1class{
    background-color: rgb(218, 137, 137);
}
.redcolor{
    color: red;
}
</style>