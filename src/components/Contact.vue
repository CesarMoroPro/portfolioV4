<template>
        <section class="general-contact">
                <h2 id="contact" class="general-h2" @click="closeSection"><font-awesome-icon class="title-icon" :icon="['fas', 'circle-question']" />Contact</h2>

                <div v-show="isContactSectionOpen">
                        <div class="general-contact__contact-device">
                                <div><font-awesome-icon class="general-contact__contact-device__contact-icon" :icon="['fas', 'mobile-screen-button']" /></div>
                                <div class="general-contact__contact-device__info-text">+33 (0)7 60 46 96 33</div>
                        </div>
        
                        <div class="general-contact__contact-device">
                                <div><font-awesome-icon class="general-contact__contact-device__contact-icon" :icon="['fas', 'square-envelope']" /></div>
                                <div class="general-contact__contact-device__info-text">cesar.moro.dev@gmail.com</div>
                        </div>
                </div>
        </section>
</template>

<script>

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
        }
}

</script>