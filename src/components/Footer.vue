<template>
        <p>César Moro</p>
        <p>Développeur JavaScript - Vue3.js - Node.js</p>
        <p><a>https://cesar.moro.fr</a> - Copyright <span class="automatic-year">{{ year }}</span></p>
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