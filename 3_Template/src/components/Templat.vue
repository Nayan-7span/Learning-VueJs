<script>
export default {
    name : "Templat",
    props:{
        
    },
    data(){
        return {
            simple_name : "Nayan Padshala",
            tag_name: "<h1>h5: Nayan<h5>",
            a: 5,
            b: 6,
            isdisabled: true

        }
    },
    methods:{
        changeName(){
            this.simple_name  = "Nayan Patel"
        }

    }
}
</script>

<template>
    <div>
        <h3 v-once>{{simple_name}}</h3>
        <h3>{{simple_name}}</h3>
        <h4>Sum is {{a + b}}</h4>
        <p v-html="tag_name"></p>
        <button v-bind:disabled="isdisabled" v-on:click="changeName">Change name</button>
    </div>
</template>
