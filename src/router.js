import HomePage from './components/HomePage.vue'
import SignUp from './components/Sign-Up.vue';
import LogIn from './components/LoginPage.vue';
import AddRes from './components/AddRes.vue';
import UpdateRes from './components/UpdateRes.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        name: 'HomePage',
        component: HomePage,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/sign-in'
    },
    {
        name: 'AddRes',
        component: AddRes,
        path: '/add'
    },
    {
        name: 'UpdateRes',
        component: UpdateRes,
        path: '/update/:id'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;