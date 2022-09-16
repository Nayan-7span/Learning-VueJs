<script>
export default {
  name: "Home",
  props: {
    data: String,
    age: Number,
  },
  data(){
    return {
        show: true
    }
  },
  methods: {
    afteralert() {
        alert("the final error")
    },
    alertbutton(name) {
      alert(`Hello i am clicked ${name}`);
      this.afteralert()
    },
    HideShow(){
        this.show = !this.show
    }
  },
};
</script>

<template>
  <div>
    <h2 v-if="show">{{ data }}</h2>
    <!-- <button v-on:mouseover="alertbutton('Big Button')">Alert Button</button> -->
    <button v-on:click="HideShow">Hide show</button>
  </div>
</template>