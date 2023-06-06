<template>
        <div class="general-skills" @click="openSection">
                <h2 id="hardskills" class="general-h2">Savoir-Faire / Hardskills</h2>

                <div class="general-skills__all-skills" v-show="isSkillsSectionOpen">
                        <ul v-for="(el, i) in hardskillsList">
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

                        /* hardskillsList: 
                        N1 : HTML, CSS, JS Vanilla, PHP, Node.js, SQL, NoSQL 
                        N2 : SCSS / Sass, Bootstrap, Vue3.js, jQuery, Express.js, WordPress No-Code, WordPress Development, 
                        N3 : Git, GitHub, POO, API, MongoDB & Mongoose, MySQL & Adminer / PhpMyAdmin, NPM, Composer */
                        hardskillsList: [
                                {
                                        id: "",
                                        name: "HTML, CSS / Sass",
                                },

                                {
                                        id: "",
                                        name: "Vanilla JavaScript, Vue.js 3",
                                },

                                {
                                        id: "",
                                        name: "PHP, Node.js (en cours)",
                                },

                                {
                                        id: "",
                                        name: "SQL & MySQL",
                                },

                                {
                                        id: "",
                                        name: "API",
                                },

                                {
                                        id: "",
                                        name: "Git & GitHub",
                                },
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