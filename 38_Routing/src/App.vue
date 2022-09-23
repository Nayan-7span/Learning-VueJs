<script>
import Home from './components/Home.vue';
export default {
    name: "App",
    components: { Home }
};
</script>

<template>
  <div>
    <router-link to="/home">Home</router-link> <br />
    <router-link to="/about">About</router-link> <br />
    <router-link to="/contact">Contact</router-link> <br />
  
    <router-view></router-view>
  </div>
</template>


