<template>
        <div class="general-about">
                <h2 class="general-h2" @click="openSection">About / À Propos</h2>

                <div class="general-about__texts" v-show="isAboutSectionOpen">
                        <p class="general-texts">Issu d'une reconversion professionnelle en télé-présentiel avec l'&nbsp;<a href="https://oclock.io/" target="blank" class="link-white link-background-orange">École O'clock</a>, je suis dès maintenant disponible pour mettre mes compétences à votre profit.</p>
                        <p class="general-texts">En plus des compétences techniques acquises lors de cette <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link-white link-background-orange">formation</a>, j'y ai appris "comment apprendre" et je prends du plaisir à continuer de progresser.</p>
                        <p class="general-texts underline-orange">Alors, ensemble, aidons-nous à grandir et à évoluer !</p>
                </div>
        </div>
</template>

<script>

export default {
        data() {
                return {
                        isAboutSectionOpen: false,
                }
        },

        methods: {
                openSection() {
                        if (this.isAboutSectionOpen === false) {
                                this.isAboutSectionOpen = true;
                        } else {
                                this.isAboutSectionOpen = false;
                        }
                }
        }
}

</script>