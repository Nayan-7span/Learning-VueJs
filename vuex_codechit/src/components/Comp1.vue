<script>
export default{
    name: "Comp1"
}

</script>


<template>
    <div>
        <h1>compo</h1>
        <h1>{{$store.state.count}}</h1>
        <h1>{{$store.getters.double}}</h1>
        <h1>{{$store.state.apiData}}</h1>
    </div>

</template>