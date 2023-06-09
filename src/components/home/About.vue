<template>
        <section class="general-about">
                <h2 id="about" class="general-h2" @click="openSection">
                        <div v-if="!isAboutSectionOpen">
                                <font-awesome-icon class="title-icon" :icon="['fas', 'user']" />À Propos - About<font-awesome-icon class="chevron-down-icon" :icon="['fas', 'chevron-down']" />
                        </div>
                        <div v-else>
                                <font-awesome-icon class="title-icon" :icon="['fas', 'user']" />À Propos - About<font-awesome-icon class="cross-icon" :icon="['fas', 'xmark']" />
                        </div>
                </h2>

                <div class="general-about__texts" v-show="isAboutSectionOpen">
                        <div class="french-bio">
                                <p class="general-texts"><span class="flags">🇫🇷 </span>Issu d'une reconversion professionnelle en télé-présentiel avec l'&nbsp;<a href="https://oclock.io/" target="blank" class="link-white link-background-orange">École O'clock</a> (Paris), je suis dès maintenant disponible pour mettre mes compétences à votre profit.</p>
                                <p class="general-texts">En plus des compétences techniques acquises lors de cette <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link-white link-background-orange">formation</a>, j'y ai appris "comment apprendre" et je prends du plaisir à continuer de progresser.</p>
                                <p class="general-texts underline-orange">Alors ensemble, aidons-nous à grandir et à évoluer !</p>
                        </div>

                        <div class="english-bio">
                                <p class="general-texts"><span class="flags">🇬🇧</span> Coming from a professional RETRAINING with <a href="https://oclock.io/" target="blank" class="link-white link-background-orange">O'clock School</a> (Paris), I am available right now to put my skills to your benefit.</p>
                                <p class="general-texts">In addition to the technical skills acquired during this <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link-white link-background-orange">training</a>, I learned "how to learn" and I take pleasure in continuing to progress.</p>
                                <p class="general-texts underline-orange">So, help us each other grow and evolve together !</p>
                        </div>

                        <a href="http://localhost:5173/#about"><UpChevronComponent></UpChevronComponent></a>
                </div>

        </section>
</template>

<script>
import UpChevronComponent from '../visuals/UpChevron.vue';

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
        },

        components: {
                UpChevronComponent,
        }
}

</script>