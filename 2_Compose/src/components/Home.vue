<script>
import Users from "./Users.vue";
import Products from "./Products.vue";
export default {
    name: "Home",
    components:{
    Users,
    Products
}
}
</script>


<template>
    <div class="heading">
        <h1>This is Heading</h1>

        <div class="users">
            <Users user="Ronak"/>
            <Users user="Sanket"/>
            <Users user="Surjit"/>
            <Users user="Darhsil"/>
        </div>

        <div class="products">
            <Products name="Mobile"/>
            <Products name="Laptop"/>
            <Products name="Computer"/>
            <Products name="Keyboard"/>
        </div>
    </div>
</template>

<style scoped>
.heading{
    padding: 5px 5px;
    width: 100%;
    text-align: center;
    height: 400px;
    background-color: rgb(107, 107, 107);
}
.users{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.products{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>