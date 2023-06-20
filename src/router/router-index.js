//? 01 - Import de Vue-router
import { createRouter, createWebHistory } from 'vue-router';

//? 04 - Import des SFC appelés par le router (qui ne sont pas en lazy-loading !)
import HomepageComponent from '../components/pages/Homepage.vue';

//? 03 - Création du tableau des routes
const routes = [
        {
                path: '/',
                name: 'Homepage',
                component: HomepageComponent,
        },

        {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: ()=>import('../components/generals/NotFound.vue'),
        }
];

//? 02 - Création d'une instance de vue-router
const router = createRouter( {
        history: createWebHistory(), 
        routes
});

export default router;