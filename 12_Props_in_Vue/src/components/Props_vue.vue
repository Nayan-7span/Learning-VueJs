<script >
export default {
    name: "Props_Vue",
    props:{
        userName: Array
    },
    data(){return{}},
    methods:{}
}
</script>

<template>
    <div>
        <h1>User Data</h1>
        <h3 v-for="user in userName" :key="user.name">{{user.name}}: {{user.email}}</h3>
    </div>
</template>