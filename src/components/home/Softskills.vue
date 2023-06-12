<template>
        <section class="general-skills">
                <h3 class="general-h3"><font-awesome-icon class="title-icon" :icon="['fas', 'handshake-angle']" />Savoir-Être - Softskills</h3>

                <div class="general-skills__all-skills">
                        <ul v-for="(el, i) in softskillsList">
                                <li class="general-skills__one-skill">{{ el }}</li>
                        </ul>
                </div>
        </section>
</template>


<script>

export default {
        data() {
                return {
                        softskillsList: [ 
                                "Culture de l'apprentissage & curiosité",
                                "Communication",
                                "Esprit d'équipe & Autonomie",
                                "Rigueur & Organisation",
                                "Capacité d'adaptation & Persévérance",
                                "Pair-programming",
                        ]
                }
        },
}

</script>