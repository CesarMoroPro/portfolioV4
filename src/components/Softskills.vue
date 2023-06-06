<template>
        <div class="general-skills" @click="openSection">
                <h2 id="softskills" class="general-h2">Savoir-Être / Softskills</h2>

                <div class="general-skills__all-skills" v-show="isSkillsSectionOpen">
                        <ul v-for="(el, i) in softskillsList">
                                <li class="general-skills__one-skill">{{ el.name }}</li>
                        </ul>
                </div>
        </div>
</template>


<script>

export default {
        data() {
                return {
                        isSkillsSectionOpen: false,

                        // softskillsList: ["Curiosité", "Esprit d'analyse", "Esprit critique", "Prise de recul", "Patience", "Esprit d'équipe", "Empathie", "Humilité", "Remise en question", "Culture de l'apprentissage", "Pair-programming"],
                        softskillsList: [
                                {
                                        id: "",
                                        name: "Culture de l'apprentissage",
                                },

                                {
                                        id: "",
                                        name: "Curiosté",
                                },

                                {
                                        id: "",
                                        name: "Esprit d'analyse",
                                },

                                {
                                        id: "",
                                        name: "Esprit critique",
                                },

                                {
                                        id: "",
                                        name: "Patience",
                                },

                                {
                                        id: "",
                                        name: "Prise de recul",
                                },

                                {
                                        id: "",
                                        name: "Esprit d'équipe",
                                },

                                {
                                        id: "",
                                        name: "Empathie",
                                },

                                {
                                        id: "",
                                        name: "Humilité",
                                },

                                {
                                        id: "",
                                        name: "Remise en question",
                                },

                                { 
                                        id: "",
                                        name: "Pair-programming",
                                }
                        ]
                }
        },


        methods: {
                openSection() {
                        if (this.isSkillsSectionOpen === false) {
                                this.isSkillsSectionOpen = true;
                        } else {
                                this.isSkillsSectionOpen = false;
                        }
                }
        }
}

</script>