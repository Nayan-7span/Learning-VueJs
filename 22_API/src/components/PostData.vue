<script>
import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
  name: "PostData",
  props: {},
  data() {
    return {
      post: {
        name: null,
        surname: null,
        gender: null,
      },
    };
  },
  methods: {
    onSubmit(){
        axios.post("http://localhost:3003/users", this.post).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
  },
};
</script>

<template>
  <div class="post-data">
    <form v-on:submit="onSubmit" method="POST" @submit.prevent>
      <input type="text" name="name" id="name" v-model="post.name" /><br />
      <input type="text" name="surname" id="surname" v-model="post.surname"/><br />

      <div>
        <label for="male">male</label>
        <input type="radio" name="gender" id="male" v-model="post.gender" value="male"/>
        <label for="female">female</label>
        <input type="radio" name="gender" id="female" v-model="post.gender" value="female"/>
      </div>

      <button type="submit">Submit</button>
      <button type="reset">reset</button>
    </form>
  </div>
</template>