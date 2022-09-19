<script >
import Filter from './components/Filter.vue';
export default{
    name: "App",
    components:{
        Filter
    }
}

</script>

<template>
  <div>
    <Filter fname="Nayan" v-bind:amount="10" />
  </div>
</template>


