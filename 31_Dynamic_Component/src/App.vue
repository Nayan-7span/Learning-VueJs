<script >
import Java from "./components/Java.vue";
import Python from "./components/Python.vue";
import JavaScript from "./components/JavaScript.vue";
export default {
  name: "App",
  components: {
    Java,
    Python,
    JavaScript,
  },
  data() {
    return {
      tab: "Java",
      clear: "Data",
    };
  },
};
</script>

<template>
  <div>
    <component :is="tab" />
    <div class="buttons">
      <button @click="tab = 'Java'">Java</button>
      <button @click="tab = 'JavaScript'">JavaScript</button>
      <button @click="tab = 'Python'">Python</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 4px;
}
</style>


