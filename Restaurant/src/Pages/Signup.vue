<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Signup",
  components: {
    Field,
    Form,
    ErrorMessage,
    Loader,
    Navbar,
    
},
  data() {
    return {
      userData: false,
      signupData: {
        username: "",
        email: "",
        password: "",
        confirm: "",
      },
      loading: false,
      error: undefined,
    };
  },
  mounted() {
    axios.get("http://localhost:3001/users").then((res) => {
      this.userData = res.data.map((Element) => {
        return Element.email;
      });
    });
  },
  computed: {
    schema() {
      return yup.object({
        username: yup.string().required("Please Enter username"),
        email: yup
          .string()
          .required("Please enter email address")
          .email("Please enter valid email"),
        password: yup.string(" ").required("Please enter password"),
        confirm: yup
          .string(" ")
          .required("Please enter password")
          .oneOf([yup.ref("password"), null], "Passwords don't match!"),
      });
    },
  },

  methods: {
    submitData() {
      this.loading = true;
      axios
        .post("http://localhost:3001/users", {
          username: this.signupData.username,
          email: this.signupData.email,
          password: this.signupData.password,
        })
        .then(() => {
          this.loading = false;
          this.error = {
            color: "green",
            message: "Your account created sucessfully!!",
          };
          this.userData.push(this.signupData.email);
          this.$router.push({ name: "login" });
        })
        .catch((error) => {});
    },

    handleSignup(e) {
      this.loading = true;
      if (this.userData.includes(this.signupData.email)) {
        this.error = { color: "red", message: "E-mail id already exist!!" };
        this.loading = false;
      } else {
        this.error = false;
        this.submitData();
      }
    },
  },
};
</script>

<template>
  <Navbar />
  <div
    class="
      w-[100%]
      h-[100%]
      bg-green bg-orange-100
      flex
      items-center
      justify-center
      p-10
    "
  >
    <Form
      @submit="handleSignup"
      :validation-schema="schema"
      class="
        flex
        items-center
        justify-center
        flex-col
        bg-white
        rounded-lg
        p-3
        md:p-10
        w-[300px]
        md:w-[500px]
        drop-shadow-md
      "
    >
      <h2 class="font-bold text-orange-primary text-xl mb-3">Signup</h2>

      <h2
        v-if="this.error"
        v-bind:class="`${this.error.color == 'green' ? 'bg-green-600':'bg-red-600'} p-2 w-[100%] rounded-sm text-white`"
      >
        {{ this.error.message }}
      </h2>

      <div>
        <img class="h-36 rounded-full" src="../assets/Logo.jpg" alt="" />
      </div>
      <Field
        v-model="signupData.username"
        type="text"
        class="field"
        name="username"
        placeholder="Enter user name"
        required
      />
      <ErrorMessage class="text-red-600 w-[100%]  mb-3 text-sm" name="username" />

      <Field
        v-model="signupData.email"
        type="email"
        class="field"
        name="email"
        placeholder="Enter Email"
        required
      />
      <ErrorMessage class="text-red-600 w-[100%]  text-sm mb-3" name="email" />

      <Field
        v-model="signupData.password"
        type="password"
        class="field"
        name="password"
        placeholder="Password"
        required
      />
      <ErrorMessage class="text-red-600 w-[100%]  text-sm mb-3" name="password" />

      <Field
        v-model="signupData.confirm"
        type="password"
        class="field"
        name="confirm"
        placeholder="Confirm password"
        required
      />
      <ErrorMessage class="text-red-600 w-[100%] " name="confirm" />

      <button v-bind:class="`signup-btn ${this.loading ? 'bg-white':'bg-orange-primary'} flex items-center justify-center`" type="submit">
        <div v-if="loading"><Loader /></div>
        <div v-else>Signup</div>
      </button>

      <router-link
        to="/login"
        class="mt-3 font-semibold text-orange-300 hover:text-orange-primary"
      >
        Already have an account ?
      </router-link>
    </Form>
  </div>
</template>