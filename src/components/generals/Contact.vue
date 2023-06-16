<template>
        <section class="general-contact">
                <h2 id="contact" class="general-h2" @click="closeSection">
                        <div v-if="!isContactSectionOpen">
                                <font-awesome-icon class="title-icon" :icon="['fas', 'circle-question']" />Contact<font-awesome-icon class="chevron-down-icon" :icon="['fas', 'chevron-down']" />
                        </div>
                        <div v-else>
                                <font-awesome-icon class="title-icon" :icon="['fas', 'circle-question']" />Contact<font-awesome-icon class="cross-icon" :icon="['fas', 'xmark']" />
                        </div>
                </h2>

                <div v-show="isContactSectionOpen">
                        <div class="general-contact__contact-device">
                                <div><font-awesome-icon class="general-contact__contact-device__contact-icon" :icon="['fas', 'mobile-screen-button']" /></div>
                                <div class="general-contact__contact-device__info-text">+33 (0)7 60 46 96 33</div>
                        </div>
        
                        <div class="general-contact__contact-device">
                                <div><font-awesome-icon class="general-contact__contact-device__contact-icon" :icon="['fas', 'square-envelope']" /></div>
                                <div class="general-contact__contact-device__info-text">cesar.moro.dev@gmail.com</div>
                        </div>

                        <a href="https://cesar-moro.fr/#skills"><UpChevronComponent></UpChevronComponent></a>
                </div>
        </section>
</template>

<script>
import UpChevronComponent from '../visuals/UpChevron.vue';

export default {
        data() {
                return {
                        isContactSectionOpen: true,
                }
        },

        methods: {
                closeSection() {
                        if (this.isContactSectionOpen) {
                                this.isContactSectionOpen = false;
                        } else {
                                this.isContactSectionOpen = true;
                        }
                }
        },

        components: {
                UpChevronComponent,
        }
}

</script>