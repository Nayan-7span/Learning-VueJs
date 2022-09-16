<script >
import ChildToParent from "./components/ChildToParent.vue";
export default{
  name: "App",
  props:{},
  data(){return{
    title:"This is default title"
  }},
  methods:{
    updateTitle(title){
      this.title = title
    }
  },components:{
    ChildToParent
  }
}

</script>

<template>
  <div>
    <h2>{{title}}</h2>
    <ChildToParent v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

