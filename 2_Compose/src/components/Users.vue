<script>
export default{
    name: "Users",
    props:{
        user: String
    }
}
</script>

<template>
    <div class="user">
        <h2>User: {{user}}</h2>
    </div>
</template>

<style scoped>
    .user{
        padding: 10px;
        width: 200px;
        background-color: burlywood;
        margin: 4px;
    }
</style>