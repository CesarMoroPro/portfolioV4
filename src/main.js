//? 01 - Import du module createApp de Vue */
import { createApp } from 'vue'

//? 02 - Import du Root Component */
import App from './App.vue'

//^ 05 - Import de librairies tierces
// Import de reset.css
import 'reset.css';

//Import de fontawesome vue
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faGithub, faLinkedin, faYoutube, faWordpress  } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faBars, faGlobe, faGithub, faLinkedin, faYoutube, faWordpress);

//? 03 - Création de l'app en passant le root component à la méthode createApp() */
createApp(App)

//^ 06 - J'ajoute les composants globaux nécessaires
.component('font-awesome-icon', FontAwesomeIcon)

//? 04 - Puis montage de l'application */
.mount('#app')
