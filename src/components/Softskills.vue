<template>
        <section class="general-skills">
                <h3 class="general-h3">Savoir-Être / Softskills</h3>

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
                                "Culture de l'apprentissage",
                                "Curiosté",
                                "Esprit d'analyse",
                                "Esprit critique",
                                "Patience",
                                "Prise de recul",
                                "Esprit d'équipe",
                                "Empathie",
                                "Humilité",
                                "Remise en question",
                                "Pair-programming",
                        ]
                }
        },
}

</script>