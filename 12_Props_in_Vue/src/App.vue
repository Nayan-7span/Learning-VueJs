<script >
export default {
  name: "App",
  data() {
    return {
      userData: [
        { name: "nayan", email: "nayan@gmail.com" },
        { name: "ronak", email: "ronak@gmail.com" },
        { name: "surjeet", email: "surjeet@gmail.com" },
      ],
    };
  },
  components: {
    Props_vue,
  },
};
import Props_vue from "./components/Props_vue.vue";
</script>

<template>
  <div>
    <Props_vue v-bind:userName="userData" />
  </div>
</template>
