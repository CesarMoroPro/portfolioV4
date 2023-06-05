<template>
        <header class="general-header">
                <div class="general-header__logo">
                        <!-- <img class="general-header__img-and-title__img" :src=profilPicture alt=""> -->
                        <div class="general-header__logo__big-circle">
                                <div class="general-header__logo__sun-moon"></div>
                                <img class="general-header__logo__parapente" :src="parapenteLogo" alt="">
                                <img class="general-header__logo__mountain" :src="montainLogo" alt="">
                        </div>
                </div>

                <h1 class="general-header__img-and-title__title">
                        <span class="id-name">MORO</span><br>
                        <span class="id-firstname">César</span><br>
                       <span class="id-speciality">Développeur JavaScript<br>
                                Vue.js 3 - Node.js</span>
                </h1>

                <nav class="general-header__nav">
                        <a class="general-header__nav__link">About me</a>
                        <a class="general-header__nav__link">My skills</a>
                        <a class="general-header__nav__link">My projects</a>
                </nav>
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
                        profilPicture,
                        montainLogo,
                        parapenteLogo,
                }
        },
}

</script>