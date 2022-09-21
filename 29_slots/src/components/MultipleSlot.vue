<script> 
export default {
    name: "MultipleSlot",

}
</script>

<template>
    <div class="container">
        <header>
            <slot name="header"> </slot>
        </header>

        <content>
            <slot name="content"> </slot>
        </content>

        <footer>
            <slot name="footer"> <p>this is defaul footer</p> </slot>
        </footer>
    </div>
</template>

<style >

    .container{
        border: 2px double white;
        margin: 10px;
    }
</style>