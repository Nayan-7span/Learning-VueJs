import {createWebHistory, createRouter} from "vue-router"
import Signup from "./Pages/Signup.vue"
import Login from "./Pages/Login.vue"
import Home from "./Pages/Home.vue"
import Update from "./Pages/Update.vue"
import Add from "./Pages/Add.vue"

const routes = [
    {
        name:'/',
        path:'/',
        component: Home
    },
    {
        name:'home',
        path:'/home',
        component: Home
    },
    {
        name:'signup',
        path:'/signup',
        component: Signup
    },
    {
        name:'login',
        path:'/login',
        component: Login
    },
    {
        name:'add',
        path:'/add',
        component: Add
    },
    {
        name:'update',
        path:'/update',
        component: Update
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router