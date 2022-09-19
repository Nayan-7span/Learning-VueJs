<script>
export default {
  name: "Signup",
  props: {},
  data() {
    return {
      error: [],
      signup: {
        fname: null,
        lname: null,
        subject: [],
        gender: null,
      },
    };
  },
  methods: {
    signupUser() {
      this.error = [];
      if (this.signup.fname && this.signup.lname) {
        console.warn("No Error!");
      }
      if (!this.signup.fname) {
        this.error.push("Please enter first name");
      }
      if (!this.signup.lname) {
        this.error.push("Please enter last name");
      }
      if (this.signup.subject.length < 1) {
        this.error.push("Please Select at least one subject");
      }
      if (!this.signup.gender) {
        this.error.push("Please select gender");
      }
      console.log(this.error);
    },
  },
};
</script>

<template>
  <div>
    <div id="errordiv">
      <p id="errorp" v-for="item in error" :key="item">{{ item }}</p>
    </div>
    <div id="formdiv">
    <form class="signup" @submit.prevent v-on:submit="signupUser">
      <h2 id="heading">Admission Form</h2>
      <div class="inputs">
        <input
          type="text"
          name="fname"
          id="fname"
          class="field"
          placeholder="Enter First Name"
          v-model="signup.fname"
        />
        <input
          type="text"
          name="lname"
          id="lname"
          class="field"
          placeholder="Enter Last Name"
          v-model="signup.lname"
        />
      </div>

      <hr style="width: 100%" />

      <div class="subjects">
        <div>
          <input
            type="checkbox"
            name="subject"
            id="C Language"
            value="C Language"
            v-model="signup.subject"
          />
          <label for="C Language">C Language</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="subject"
            id="Java"
            value="Java"
            v-model="signup.subject"
          />
          <label for="Java">Java</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="subject"
            id="JavaScript"
            value="JavaScript"
            v-model="signup.subject"
          />
          <label for="JavaScript">JavaScript</label>
        </div>
      </div>

      <div class="gender">
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            v-model="signup.gender"
          />
          <label for="male">Male</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            v-model="signup.gender"
          />
          <label for="female">Female</label>
        </div>
      </div>

      <hr style="width: 100%" />

      <div class="buttons">
        <button type="submit" class="button" id="submit">Submit</button>
        <button type="reset" class="button" id="reset">Cancel</button>
      </div>
    </form>
  </div>
  </div>
</template>

<style >
#heading {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#formdiv{
  display: flex;
  justify-content: center;
}

.signup {
  display: flex;
  width: 400px;
  flex-direction: column;
  background-color: rgb(54, 54, 54);
  padding: 30px;
  border-radius: 10px;
}

.field {
  margin: 2px;
  padding: 14px;
  margin: 4px;
  background-color: rgba(255, 255, 255, 0.183);
  border-radius: 3px;
  border: none;
}

::placeholder {
  color: rgb(161, 161, 161);
  opacity: 1; /* Firefox */
}

.inputs {
  display: flex;
  flex-direction: column;
  margin: 4px;
}

.subjects {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.gender {
  margin: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.button {
  width: 50%;
  margin: 4px;
}

.button:hover {
  border: none;
}

#submit {
  background-color: rgb(4, 207, 4);
  font-weight: bold;
  will-change: filter;
}

#reset {
  background-color: rgb(255, 35, 35);
  font-weight: bold;
  will-change: filter;
}

#submit:hover {
  border: 1px solid white;
  filter: drop-shadow(0 0 2em #19e00f98);
}

#reset:hover {
  border: 1px solid white;
  filter: drop-shadow(0 0 2em #ff0000af);
}

.gender {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
}

#errorp {
  color: white;
  background-color: rgb(255, 35, 35);
  border: 1px solid rgb(255, 35, 35);
  width: fit-content;
  padding: 8px;
  border-radius: 3px;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 20px 2px;
  will-change: filter;
}

#errorp:hover {
  cursor: pointer;
  border: 1px solid white;
  filter: drop-shadow(0 0 2em #ff0000af);
}

#errordiv {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>