<script>
export default {
  name: "Comp2",
  methods:{
    incrementNum(){
        this.$store.commit('increment')
    },
    getUserData(){
        this.$store.dispatch('getData')
    }
  }
};
</script>
    
    
 <template>
    <div>
        <button v-on:click="incrementNum">Increment</button>
        <button v-on:click="getUserData">GetData</button>
    </div>
 </template>