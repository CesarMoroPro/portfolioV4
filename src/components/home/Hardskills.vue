<template>
        <section class="general-skills">
                <h3 class="general-h3"><font-awesome-icon class="title-icon" :icon="['fas', 'code']" />Savoir-Faire - Hardskills</h3>

                <div class="general-skills__all-skills">
                        <ul v-for="(el, i) in hardskillsList">
                                <li class="general-skills__one-skill">{{ el.name }}</li>
                        </ul>
                </div>
                
        </section>
</template>

<script>

export default {
        data() {
                return {
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
                                        name: "REST API, Postman / Insomnia",
                                },

                                {
                                        id: "",
                                        name: "Git & GitHub",
                                },
                        ]
                }
        },
}

</script>