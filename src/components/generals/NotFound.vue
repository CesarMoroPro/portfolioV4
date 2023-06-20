<template>
        <section class="general-not-found">
                <h2 class="general-not-found__404-title">404<br>La page demandée n'existe pas</h2>

                <div class="general-header__logo">
                        <div class="general-header__logo__big-circle">
                                <div class="general-header__logo__sun-moon"></div>
                                <img class="general-header__logo__parapente parapente-failed" :src="parapenteLogo" alt="parapentiste qui tombe par devant la montagne">
                                <img class="general-header__logo__mountain" :src="montainLogo" alt="logo d'une montagne">
                        </div>
                </div>

                <router-link to="/" class="general-not-found__link">Retour à la page d'accueil</router-link>
        </section>

        <SocialComponent></SocialComponent>
</template>

<script>
import montainLogo from '../../assets/img/illustrations/logo-montagne-nobg.png';
import parapenteLogo from '../../assets/img/illustrations/logo-parapente-nobg.png';

import SocialComponent from '../generals/Social.vue';

export default {
        data() {
                return {
                        /* Images */
                        montainLogo,
                        parapenteLogo,
                        /* Autres data */
                }
        },
        components: {
                SocialComponent,
        }
}

</script>