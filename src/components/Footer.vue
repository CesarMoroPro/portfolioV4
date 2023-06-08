<template>
        <section class="footer">
                <p>César Moro</p>
                <p class="qualification">Développeur JavaScript - Vue3.js - Node.js</p>
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