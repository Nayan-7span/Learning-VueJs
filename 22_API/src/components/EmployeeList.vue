<script >
import axios from "axios";
import vueAxios from "vue-axios";

export default {
  name: "EmployeeList",
  props: {},
  data() {
    return {
      loading: false,
      employeeData: [],
    };
  },
  methods: {},
  mounted() {
    this.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.employeeData = res.data;
        this.loading = false;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <div>
    <h1>Emplyee List</h1>
    <div>
        <h2 v-if="loading">loading....</h2>
        <h2 v-for="item in employeeData" :key="item.id" >{{ item.name }}</h2>
        
    </div>
  </div>
</template>