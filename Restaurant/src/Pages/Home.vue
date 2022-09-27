<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import Loader2 from "../components/Loader2.vue";
export default {
  name: "Home",
  components: { Navbar, Card, Loader2 },
  data() {
    return {
      loading: true,
      resData: undefined,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("http://localhost:3001/restaurant")
      .then((res) => {
        this.resData = res.data;
        this.loading = false;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <Navbar />

  <div class="my-10 text-center font-bold text-5xl font-sans ">
      <h1 class="bg-white px-5 md:px-32 py-2 pb-3 rounded-md w-fit mx-auto text-orange-primary shadow-xl">Restaurants</h1>
  </div>

  <div class="paren flex flex-row justify-center flex-wrap">
    <div v-if="loading">
      <Loader2 />
    </div>
    <Card
      v-for="item in resData"
      :key="item.id"
      v-bind:photo="item.image"
      v-bind:name="item.name"
      v-bind:address="item.Address"
      v-bind:mobile="item.contact"
    />
  </div>
</template>