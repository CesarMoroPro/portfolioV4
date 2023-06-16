//? 01 - Import du module createApp de Vue */
import { createApp } from 'vue'

//? 02 - Import du Root Component */
import App from './App.vue'

//= 07 Import du router
import router from './router';

//^ 05 - Import de librairies tierces
// Import de reset.css
import 'reset.css';

//Import de fontawesome vue
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faGithub, faSquareGithub, faLinkedin, faYoutube, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faSquareEnvelope, faBars, faGlobe, faMobileScreenButton, faCircleQuestion, faUser, faLaptopCode, faFireFlameCurved, faHandshakeAngle, faCode, faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faSquareEnvelope, faMobileScreenButton, faBars, faGlobe, faGithub, faSquareGithub, faLinkedin, faYoutube, faWordpress, faCircleQuestion, faUser, faLaptopCode, faFireFlameCurved, faHandshakeAngle, faCode, faChevronDown, faChevronUp, faXmark);

//? 03 - Création de l'app en passant le root component à la méthode createApp() */
createApp(App)

//^ 06 - J'ajoute les composants globaux nécessaires
.component('font-awesome-icon', FontAwesomeIcon)

//= 08 - Appel de .use(router)
.use(router)


//? 04 - Puis montage de l'application */
.mount('#app')
