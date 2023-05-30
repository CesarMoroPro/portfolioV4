//? 01 - Import du module createApp de Vue */
import { createApp } from 'vue'

//? 02 - Import du Root Component */
import App from './App.vue'

//? 03 - Création de l'app en passant le root component à la méthode createApp() */
createApp(App)

//? 04 - Puis montage de l'application */
.mount('#app')
