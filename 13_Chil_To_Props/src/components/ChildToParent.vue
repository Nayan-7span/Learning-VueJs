<script>
    export default{
        name: "ChildToParent",
        props:{},
        data(){return{}},
        methods:{
            updateTitle(){
                this.$emit("changeTitle","The new title is assigned")
            }
        }
    }

</script>

<template>
    <div>
        <button v-on:click="updateTitle">Update Parent Title</button>
    </div>
    
</template>