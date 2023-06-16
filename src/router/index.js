//? 01 - Import de Vue-router
import { createRouter, createWebHistory } from 'vue-router';

//? 04 - Import du SFC Home appelé par le router


//? 03 - Création du tableau des routes
const routes = [
];

//? 02 - Création d'une instance de vue-router
const router = createRouter( {
        history: createWebHistory(), 
        routes
});

export default router;