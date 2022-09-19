<script>
export default {
  name: "Methods",
  props: {},
  data() {
    return {
      name: "Nayan",
    };
  },
  created() {
    this.name = "Nayan Padshala";
    console.log("Created : ", this.name); //  return: Nayan Padshala
  },
  beforeCreate() {
    console.log("Before Create", this.name); //return : Undefined
  },
};
</script>

<template></template>