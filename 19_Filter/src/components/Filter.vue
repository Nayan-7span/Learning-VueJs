<script>
export default{
    name: "Filter",
    props:{
        fname: String,
        amount: Number
    },
    computed: {
      rsToDollar() {
        return  this.amount * 75
      },
      Capital(){
        return this.fname.toUpperCase()
      }
    }
}
</script>

<template>
    <div>
        <h1>Name is: {{Capital}}</h1>
        <h1>Amount is: {{rsToDollar}}</h1>
    </div>
</template>
