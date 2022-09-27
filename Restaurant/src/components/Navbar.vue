<script>
export default {
  name: "Navbar",
  data() {
    return {
      isloggedin: true,
    };
  },
  mounted() {
    if (!sessionStorage.getItem("userdata")) {
      this.isloggedin = false;
    }
  },
  methods: {
    handleLogout() {
      const logout = confirm("Are you really want to logout?");
      if (logout) {
        sessionStorage.removeItem("userdata");
        this.isloggedin = false;
      } else {
      }
    },
  },
};
</script>

<template>
  <div class="sticky top-0 w-[100%] z-10 scrol">
    <div class="bg-orange-primary p-2 flex  flex-col md:flex-row md:justify-between">
      <div class="flex flex-row items-center">
        <img
          src="../assets/Logo.jpg"
          alt="logo"
          class="rounded-full h-12 w-fit mx-3"
        />
        <router-link to="/home"  class="nav-link">Home</router-link>
        <router-link to="/add"  class="nav-link">Add Restaurant</router-link>
        <router-link to="/update"  class="nav-link">Update Restaurant</router-link>
      </div>
      
      <div v-if="!isloggedin" class="flex flex-row items-center justify-center">
        <router-link to="/login" class="logsign">Login</router-link>
        <router-link to="/signup" class="logsign">Signup</router-link>
      </div>

      <div v-else class="flex flex-row items-center justify-center">
        <button class="logsign" v-on:click="handleLogout">Logout</button>
      </div>
    </div>
  </div>
</template>