import axios from "axios";
import { createStore } from "vuex";

const store = createStore({

    state(){

        return{
            count: 0,
            apiData: undefined

        }
    },
    mutations:{
        increment(state){
            state.count++ 
        },
        setData(state, data){
            state.apiData = data.title
        }
    },
    actions:{
        async getData({commit,state}){
            state.apiData = "Loading..."
            axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
                const data = res.data
                commit("setData", data)
            })
        }
    },
    getters:{
        double(state){
            return state.count + state.count
        }
    }

})

export default store;