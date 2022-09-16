<script>
export default {
  name: "Signup",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>


<template>
  <div>
    <form class="signup">
        <h2 id="heading">Admission Form</h2>
      <div class="inputs">
        <input
          type="text"
          name="fname"
          id="fname"
          class="field"
          placeholder="Enter First Name"
        />
        <input
          type="text"
          name="lname"
          id="lname"
          class="field"
          placeholder="Enter Last Name"
        />
      </div>

      <div class="subjects">
        <div>
          <input
            type="checkbox"
            name="subject"
            id="C Language"
            value="C Language"
          />
          <label for="C Language">C Language</label>
        </div>

        <div>
          <input type="checkbox" name="subject" id="Java" value="Java" />
          <label for="Java">Java</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="subject"
            id="JavaScript"
            value="JavaScript"
          />
          <label for="JavaScript">JavaScript</label>
        </div>
      </div>

      <div class="gender">
        <div>
          <input type="radio" name="gender" id="male" value="male" />
          <label for="male">Male</label>
        </div>

        <div>
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
        </div>
      </div>

      <div class="buttons">
        <button type="submit" class="button" id="submit">Submit</button>
        <button type="reset" class="button" id="reset">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style >
    #heading{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

.gender{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px;
}
</style>