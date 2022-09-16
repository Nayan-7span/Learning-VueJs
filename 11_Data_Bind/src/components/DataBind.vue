<script>
export default {
  name: "DataBind",
  props: {},
  data() {
    return {
      message: "Hii",
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <h1>Write Youe message</h1>
    <h3 style="white-space: pre-line">Your message is : {{ message }}</h3>
    <textarea
      name="message"
      id="message"
      v-model="message"
      cols="65"
      rows="10"
    />
  </div>
</template>