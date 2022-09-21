<script> 
export default {
    name: "Watchers",
    props:{},
    data(){
        return{
            number: 0
        }
    },
    watch:{
        number(val, pre){
            console.log(val, pre)
        }
    }
}

</script>

<template>
    <div>
        <h1>{{number}}</h1>
        <button v-on:click="number+= 1">Increase</button> <br/>
        <button v-on:click="number-= 1">Decrease</button>
    </div>
        
</template>