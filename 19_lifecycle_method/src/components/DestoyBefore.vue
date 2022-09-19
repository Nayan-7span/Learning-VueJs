<!-- beforeDestory and destroyed replaced with beforeUnMount and unmounted in v3 of vue -->
<script> 
export default{
    name: "DestoyBefore",
    data(){
        return{
            name : "nayan"
        }
    },
    beforeUnmount(){
        console.warn("before destroy")
    },
    unmounted(){
        console.warn("After destroyed")
    }
}
</script>

<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>