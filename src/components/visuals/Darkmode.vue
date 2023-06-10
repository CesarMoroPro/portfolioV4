<template>

        <section class="general-darkmode">

                <div class="general-darkmode__darkmode-container">

                        <div class="general-darkmode__darkmode-container__darkmode-not-active-button" @click="darkmodeFunction" :class="isDarkmodeActive ? 'general-darkmode__darkmode-container__darkmode-active-button' : ''">
                                <div class="general-darkmode__darkmode-container__darkmode-active-button__crater-1" v-show="isDarkmodeActive"></div>
                                <div class="general-darkmode__darkmode-container__darkmode-active-button__crater-2" v-show="isDarkmodeActive"></div>
                                <div class="general-darkmode__darkmode-container__darkmode-active-button__crater-3" v-show="isDarkmodeActive"></div>
                                <div class="general-darkmode__darkmode-container__darkmode-active-button__crater-4" v-show="isDarkmodeActive"></div>
                        </div>

                </div>

        </section>

</template>

<script>

export default {
        data() {
                return {
                        isDarkmodeActive: false,
                }
        },

        methods: {
                darkmodeFunction() {
                        if (this.isDarkmodeActive === false) {
                                this.isDarkmodeActive = true;

                        } else {
                                this.isDarkmodeActive = false;
                        }
                }
        }
}

</script>