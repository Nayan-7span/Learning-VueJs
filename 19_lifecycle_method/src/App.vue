<script >
import Methods from "./components/Methods.vue";
import MountUnMount from "./components/MountUnMount.vue";
import DestoyBefore from "./components/DestoyBefore.vue";
export default {
  name: "App",
  components: {
    DestoyBefore,
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>

<template>
  <div>
    <div v-if="visible">
      <DestoyBefore />
    </div>
    <button v-on:click="handleVisible">Click</button>
  </div>
</template>

