<template>
        <section class="footer">
                <p>César Moro - Portfolio</p>
                <p class="qualification">Développeur JavaScript - Vue.js 3</p>
                <p><a href="https://cesar-moro.fr" class="footer-link">https://cesar.moro.fr</a> - Copyright <span class="automatic-year">{{ year }}</span></p>
        </section>
</template>

<script>

export default {

        data() {
                return {
                        year: null,
                }
        },

        mounted() {
                window.addEventListener('load', () => {
                        const completeDate = new Date();
                        this.year = completeDate.getFullYear();
                       return this.year;
                })
        }
}

</script>