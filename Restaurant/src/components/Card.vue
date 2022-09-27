<script>
import { string } from "yup/lib/locale";
export default {
  name: "Card",
  props: {
    photo: string,
    name: string,
    address: string,
    mobile: string,
  },
  data() {
    return {
      image: undefined,
    };
  },
  mounted() {
    let img = new Image();
    img.src = this.photo;
    this.image = img;
  },
};
</script>

<template>
  <div
    class="
      max-w-sm
      rounded
      p-2
      bg-white
      overflow-hidden
      m-4
      w-80
      shadow-stone-400 shadow-md
    "
  >
    <img
      class="h-72 w-[100%]"
      v-bind:src="image?.src"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-2xl mb-2 text-black">{{ name }}</div>
      <p class="text-stone-500 text-base font-medium">
        📍{{ address }}
      </p>
    </div>

    <div class="px-6 py-4 flex justify-between">
      <div class="p-1 flex items-center border-[1px] w-[50%] cursor-pointer border-stone-400 rounded-full">
        📞 <p class="text-sm text-neutral-400 font-sans font-bold mx-1">{{ mobile }}</p>
      </div>
      <div class="p-1 flex items-center justify-end   w-[50%] rounded-full">
            <button class="mx-1 bg-green-500 p-1 px-3 text-white  text-sm font-semibold rounded-full hover:bg-green-400 duration-200" >Edit</button>
            <button class="mx-1 bg-red-500 p-1 px-2 text-white  text-sm font-semibold rounded-full hover:bg-red-400 duration-200">Delete</button>
      </div>
    </div>
  </div>
</template>
