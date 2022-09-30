<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import TableRow from "../components/TableRow.vue";
import Loader2 from "../components/Loader2.vue";
export default {
  name: "Update",
  components: { Navbar, TableRow, Loader2 },
  data() {
    return {
      loading: false,
      resData: [],
    };
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get("http://localhost:3001/restaurant")
        .then((res) => {
          this.resData = res.data;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
        
<template>
  <Navbar />

  <div class="my-10 text-center font-bold text-5xl font-sans">
    <h1
      class="
        bg-white
        px-5
        md:px-32
        py-2
        pb-3
        rounded-md
        w-fit
        mx-auto
        text-orange-primary
        shadow-xl
      "
    >
      Update Restaurant
    </h1>
  </div>

  <div class="overflow-x-auto relative m-10 shadow-xl rounded-md h-[430px]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
      <thead class="text-xs text-gray-100 uppercase bg-orange-primary sticky top-0">
        <tr>
          <th scope="col" class="py-3 px-6">ID</th>
          <th scope="col" class="py-3 px-6">Image</th>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Address</th>
          <th scope="col" class="py-3 px-6">Mobile</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading" class="bg-white h-[430px] text-stone-700 border-b">
          <td  class="py-4 px-6" colspan="6" ><Loader2/></td>
        </tr>
        <TableRow
          v-else
          v-for="item in resData"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:photo="item.image"
          v-bind:rest_id="item.id"
          v-bind:address="item.Address"
          v-bind:mobile="item.contact"
        />
      </tbody>
    </table>
  </div>
</template>