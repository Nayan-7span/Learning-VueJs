<script setup>
import SlotDemo from "./components/SlotDemo.vue";
import MultipleSlot from "./components/MultipleSlot.vue";
</script>

<template>
  <!-- Simple or single  slot   -->
  <!-- <SlotDemo><h1>this is title</h1></SlotDemo> -->
  <!-- <SlotDemo><h5>this is h5</h5></SlotDemo> -->

  <MultipleSlot>
    <template v-slot:header>
      <h1>This is header</h1>
    </template>

    <template v-slot:content>
      <h3>This is content</h3>
    </template>

    <template v-slot:footer>
      <p>This is footer</p>
    </template>
  </MultipleSlot>

  <MultipleSlot>
    <template v-slot:header>
      <h1>This is header 2</h1>
    </template>

    <template v-slot:content>
      <h3>This is content 2</h3>
    </template>

    <template v-slot:footer>
    </template>
  </MultipleSlot>
</template>
