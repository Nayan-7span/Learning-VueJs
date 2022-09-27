<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import Loader from "../components/Loader.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Add",
  components: {
    Field,
    Form,
    ErrorMessage,
    Loader,
    Navbar,
  },
  data() {
    // work in progress 26-09-2022--------------------------------------
    return {
      addData: {
        name: "",
        mobile: "",
        address: "",
        photo: "",
        basePhoto: "",
      },
      // work in progress 26-09-2022--------------------------------------

      loading: false,
      error: undefined,
    };
  },
  computed: {
    schema() {
      return yup.object({
        name: yup.string().min(5, "Please enter at least 5 character"),
        mobile: yup
          .string("Please enter valid mobile number")
          .length(10, "Mobile number should be 10 number"),
        address: yup.string().length(10, "Please enter at least 10 character."),
      });
    },
  },

  methods: {
    

    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },

    convertImage(file) {
      this.getBase64(file).then((base64) => {
        return base64;
      });
    },

    async handleAdd(e) {
      this.loading = true
      const file = this.addData.photo;
      this.addData.basePhoto = await this.getBase64(file);
      
      axios.post("http://localhost:3001/restaurant", {
        name: this.addData.name,
        Address: this.addData.address,
        contact: this.addData.mobile,
        image: this.addData.basePhoto
      }).then((res)=>{ 
        this.error = {color:"green", message:"Restaurant added successfully!!"}
        this.loading = false
        e.target.reset();
      }).catch(error => console.log(error))
      
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
      :validation-schema="schema"
      @submit="handleAdd"
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
        md:w-[700px]
        drop-shadow-md
      "
    >
      <h2 class="font-bold text-orange-primary text-xl mb-3">
        Adding Reasturant
      </h2>
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

      <div class="w-[100%] flex flex-row">
        <div class="w-[50%] mr-2">
          <Field
            v-model="addData.name"
            type="text"
            class="field"
            name="name"
            placeholder="Enter name"
            required
          />
          <ErrorMessage
            class="text-red-600 w-[100%] text-sm mb-3"
            name="name"
          />
        </div>

        <div class="w-[50%]">
          <Field
            v-model="addData.mobile"
            type="number"
            class="field"
            name="mobile"
            placeholder="Mobile number"
            required
          />
          <ErrorMessage
            class="text-red-600 w-[100%] text-sm mb-3"
            name="mobile"
          />
        </div>
      </div>

      <div class="w-[100%] my-4">
        <textarea
          v-model="addData.address"
          class="field"
          name="address"
          placeholder="Restaurant address"
          required
        />
        <ErrorMessage
          class="text-red-600 w-[100%] text-sm mb-3"
          name="address"
        />
      </div>

      <div class="w-[100%] my-4">
        <label for="photo" class="mx-2 font-bold text-orange-primary"
          >Upload photo</label
        >
        <Field
          v-model="addData.photo"
          type="file"
          id="photo"
          class="field"
          name="photo"
          required
        />
        <ErrorMessage class="text-red-600 w-[100%] text-sm mb-3" name="photo" />
      </div>

      <button v-bind:class="`signup-btn ${this.loading ? 'bg-white':'bg-orange-primary'} flex items-center justify-center`" type="submit">
        <div v-if="loading"><Loader /></div>
        <div v-else>Add Restaurant</div>
      </button>
    </Form>
  </div>
</template>