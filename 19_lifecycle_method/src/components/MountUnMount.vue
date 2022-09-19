<script>
export default{
    name: "MountUnMount",
    data(){
        return{
            name: "nayan"
        }
    },
    beforeMount(){
        console.log(this.$el)
    },
    mounted(){
        console.log(this.$el)
    }
}
</script>

<template>
    <div>
        <h1>this is {{name}}</h1>
    </div>
</template>