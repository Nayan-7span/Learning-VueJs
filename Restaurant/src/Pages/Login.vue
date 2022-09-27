<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Field,
    Form,
    ErrorMessage,
    Loader,
    Navbar,
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      loading: false,
      error: undefined,
    };
  },
  computed: {
    schema() {
      return yup.object({
        email: yup
          .string()
          .required("Please enter email address")
          .email("Please enter valid email"),
        password: yup.string(" ").required("Please enter password"),
      });
    },
  },

  methods: {
    async handleSignup(e) {
      this.loading = true;
      await axios
        .get(`http://localhost:3001/users/?email=${this.loginData.email}`)
        .then((res) => {
          if (res.data.length === 1) {
            if (this.loginData.password !== res.data[0].password) {
              this.error = {
                color: "red",
                message: "Please enter valid password!!",
              };
            } else {
              sessionStorage.setItem("userdata", JSON.stringify(res.data[0]));
              this.error = {
                color: "green",
                message: "Your account logged in successfully!!",
              };
              this.$router.push({ name: "home" });
            }
          } else {
            this.error = { color: "red", message: "Account does not exist!!" };
          }
        })
        .catch((error) => {});
      this.loading = false;
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
      py-20
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
      <h2 class="font-bold text-orange-primary text-xl mb-3">Login</h2>
      <h2
        v-if="this.error"
        v-bind:class="`${
          this.error.color == 'green' ? 'bg-green-600' : 'bg-red-600'
        } p-2 w-[100%] rounded-sm text-white`"
      >
        {{ this.error.message }}
      </h2>

      <div>
        <img class="h-36 rounded-full" src="../assets/Logo.jpg" alt="" />
      </div>

      <Field
        v-model="loginData.email"
        type="email"
        class="field"
        name="email"
        placeholder="Enter Email"
        required
      />
      <ErrorMessage class="text-red-600 w-[100%] text-sm mb-3" name="email" />

      <Field
        v-model="loginData.password"
        type="password"
        class="field"
        name="password"
        placeholder="Password"
        required
      />
      <ErrorMessage
        class="text-red-600 mx-0 w-[100%] text-sm mb-3"
        name="password"
      />

      <button
        v-bind:class="`signup-btn ${
          this.loading ? 'bg-white' : 'bg-orange-primary'
        } flex items-center justify-center`"
        type="submit"
      >
        <div v-if="loading"><Loader /></div>
        <div v-else>Login</div>
      </button>

      <router-link
        to="/signup"
        class="mt-3 font-semibold text-orange-300 hover:text-orange-primary"
      >
        Dont have an account ?
      </router-link>
    </Form>
  </div>
</template>