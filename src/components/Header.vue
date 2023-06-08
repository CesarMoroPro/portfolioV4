<template>
        <header class="general-header">
                <div class="general-header__highline">
                        <h1 class="general-header__highline__id">
                                <span class="id-name">César MORO</span>
                        </h1>
                        
        
                        <nav class="general-header__highline__nav">
                                <!-- <div v-show="mediaQueryMobile" @click="toogleMenu">
                                        <font-awesome-icon class="icon general-highline__nav__menu-icon" :icon="['fas', 'bars']" size="xl"/>
                                </div> -->
                                <div class="general-header__highline__nav__links">
                                        <a href="http://localhost:5173/#about" class="general-header__highline__nav__links__link">À propos / About</a>
                                        <a href="http://localhost:5173/#skills" class="general-header__highline__nav__links__link">Compétences / Skills</a>
                                        <a href="http://localhost:5173/#projects" class="general-header__highline__nav__links__link">Projets / Projects</a>
                                </div>
                        </nav>
                </div>

                <div class="general-header__logo">
                        <div class="general-header__logo__big-circle">
                                <div class="general-header__logo__sun-moon"></div>
                                <img class="general-header__logo__parapente" :src="parapenteLogo" alt="">
                                <img class="general-header__logo__mountain" :src="montainLogo" alt="">
                        </div>
                </div>

                <div class="general-header__subtitle">
                        <h2 class="general-header__subtitle__qualification">
                                Développeur Web et Web Mobile<br>
                                <span class="general-header__subtitle__qualification__speciality"> JavaScript - Vue.js 3</span>
                        </h2>
                </div>

        </header>
</template>


<script>
// Import d'images
/* Importer des assets de cette manière évite les erreurs lors du build de l'application,
alors qu'en les ajoutant directement dans l'attribut en html, elles se seront pas forcément compilées.
*/
import profilPicture from '../assets/img/avatar/profil-vw-modif.jpg';
import montainLogo from '../assets/img/illustrations/logo-montagne-nobg.png';
import parapenteLogo from '../assets/img/illustrations/logo-parapente-nobg.png';

export default {
        data() {
                return {
                        /* Images */
                        profilPicture,
                        montainLogo,
                        parapenteLogo,
                        /* Autres data */
                }
        },
}

</script>