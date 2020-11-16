import VueRouter from "vue-router";
import Home from './components/Home.vue';
import DadosForm from './components/DadosForm.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: DadosForm
        },
    ]

})