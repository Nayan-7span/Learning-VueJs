<script>
import axios from "axios";
import { boolean, number, string } from "yup/lib/locale";
export default {
  name: "TableRow",
  props: {
    rest_id: number,
    photo: string,
    name: string,
    address: string,
    mobile: number,
  },
  data() {
    return {
      image: undefined,
      isEdit: true,
      ename: this.name,
      eaddress: this.address,
      emobile: this.mobile,
    };
  },
  mounted() {
    let img = new Image();
    img.src = this.photo;
    this.image = img;
  },
  methods: {
    handleEdit(id) {
      axios.put(`http://localhost:3001/restaurant/${id}`, {
        name: this.ename,
        Address: this.eaddress,
        contact: this.emobile,
        image: this.image.src,
      });
      this.isEdit = false;
    },

    handleCancel() {
      (this.isEdit = true),
        (this.ename = this.name),
        (this.eaddress = this.address),
        (this.emobile = this.mobile),
        (this.isEdit = false);
    },
  },
};
</script>

<template>
  <tr
    v-bind:class="`${
      isEdit === rest_id ? 'bg-orange-100' : 'bg-white'
    } text-stone-700 border-b`"
  >
    <td class="py-4 px-6">{{ rest_id }}</td>
    <td class="py-4 px-6">
      <img
        class="h-16 w-16 rounded-full"
        v-bind:src="image?.src"
        alt="Sunset in the mountains"
      />
    </td>
    <td class="py-4 px-6">
      <input
        type="text"
        v-model="ename"
        v-bind:readonly = " !(true && isEdit === rest_id)"
        v-bind:class="` outline-none ${
          isEdit === rest_id && 'border-b-2  bg-orange-100 border-orange-primary'
        } p-2`"
      />
    </td>
    <td class="py-4 px-6">
      <input
        type="text"
        v-model="eaddress"
        v-bind:readonly = " !(true && isEdit === rest_id)"
        v-bind:class="` outline-none ${
          isEdit === rest_id && 'border-b-2  bg-orange-100 border-orange-primary'
        } p-2`"
      />
    </td>
    <td class="py-4 px-6">
      <input
        type="text"
        v-model="emobile"
        v-bind:readonly = " !(true && isEdit === rest_id)"
        v-bind:class="` outline-none ${
          isEdit === rest_id && 'border-b-2  bg-orange-100 border-orange-primary'
        } p-2`"
      />
    </td>
    <td>
      <div v-if="isEdit === rest_id">
        <button
          v-bind:disabled="!isEdit === rest_id"
          v-on:click="handleEdit(rest_id)"
          class="
            bg-[#00d26a]
            p-1
            hover:p-2
            duration-200
            rounded-full
            text-2xl
            mx-2
          "
        >
          ✅
        </button>

        <button
          v-bind:disabled="!isEdit === rest_id"
          v-on:click="handleCancel()"
          class="bg-red-300 p-1 hover:p-2 text-white duration-200 rounded-full text-2xl"
        >
          ❌
        </button>
      </div>

      <button
        v-else
        v-on:click="
          () => {
            isEdit = rest_id;
          }
        "
        class="
          bg-green-500
          hover:bg-green-700
          p-1
          px-5
          text-white
          font-bold
          rounded-md
        "
      >
        Edit
      </button>
    </td>
  </tr>
</template>