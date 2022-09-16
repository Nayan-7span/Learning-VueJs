<script>
export default{
    name:"Condition",
    props:{

    },
    data(){
        return{
            show: true
        }
    },
    methods: {
        showHide(){
            console.log("i am clicked")
            this.show = !this.show
        }
    }
}
</script>


<template>
    <div>
        <h1 v-if="show">I am SHOW</h1>
        <h1 v-else>I am HIDE</h1>
        <button v-on:click="showHide">Change</button>
    </div>
    
</template>