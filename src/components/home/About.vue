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
                                <p class="general-texts">Issu d'une reconversion professionnelle en télé-présentiel avec l'&nbsp;<a href="https://oclock.io/" target="blank" class="link-white link-background-orange">École O'clock</a> (Paris), je suis disponible et motivé pour mettre mes compétences et qualités à votre profit.</p>
                                <p class="general-texts">En plus de mon expérience acquise lors de cette <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link-white link-background-orange">formation</a>, j'ai appris le "comment apprendre" et je prends beaucoup de plaisir à me perfectionner.</p>
                                <p class="general-texts underline-orange">Ensemble, aidons-nous à grandir et à évoluer !</p>
                        </div>

                        <div class="english-bio english">
                                        <p class="general-texts">In order to pursue my dream, I chose a professional retrainging with <a href="https://oclock.io/" target="blank" class="link-white link-background-orange">O'clock School</a> (Paris) to be a web developer.</p>
                                        <p class="general-texts">Thrilled about building strong relationships and providing the best service, I am available right away. I am also motivated and eager to learn.</p>
                                        <p class="general-texts underline-orange">Let's help each other grow and evolve together !</p>
                        </div>

                        <a href="https://cesar-moro.fr/#about"><UpChevronComponent></UpChevronComponent></a>
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