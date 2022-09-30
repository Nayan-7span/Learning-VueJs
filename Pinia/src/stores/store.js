import { defineStore } from "pinia";

const store = defineStore({
    state(){
        return{
            count : 0
        }
    },
    actions:{
        increment(){
            this.count + 1
        }
    },
    getters:{
        doubleCount(){
            return this.count + this.count
        }
    }


})

export default store