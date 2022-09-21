<script>
export default {
  name: "Modifiers",
  props: {},
  data() {
    return {
        lazyname: "",
        typenumber: "",
        trimstring:"",
        allinone: ""
    };
  },
};
</script>

<template>
  <div>
    <input type="text" v-model.lazy="lazyname" />
    <h2>Lazy name is : {{lazyname}}</h2>

    <br/>

    <input type="number" v-model.number="typenumber">
    <h2>Type-Number : {{typeof(typenumber)}}</h2>

    <br/>

    <input type="text" v-model.trim="trimstring">
    <h2>Trim-string : {{trimstring}}</h2>

    <br>

    <input type="text" v-model.lazy.trim="allinone">
    <h2>AllinOne: {{allinone}}</h2>

  </div>
</template>