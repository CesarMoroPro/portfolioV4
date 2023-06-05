<template>
        <div class="general-hardskills" @click="openSection">
                <h2 class="general-h2">Hardskills</h2>
                <ul v-for="(el, i) in hardskillsList" v-show="isHardskillsSectionOpen">
                        <li>{{ el.name }}</li>
                </ul>
        </div>
</template>

<script>

export default {
        data() {
                return {
                        isHardskillsSectionOpen: false,

                        /* hardskillsList: 
                        N1 : HTML, CSS, JS Vanilla, PHP, Node.js, SQL, NoSQL 
                        N2 : SCSS / Sass, Bootstrap, Vue3.js, jQuery, Express.js, WordPress No-Code, WordPress Development, 
                        N3 : Git, GitHub, POO, API, MongoDB & Mongoose, MySQL & Adminer / PhpMyAdmin, NPM, Composer */
                        hardskillsList: [
                                {
                                        id: "",
                                        name: "HTML",
                                },

                                {
                                        id: "",
                                        name: "CSS",
                                },

                                {
                                        id: "",
                                        name: "JavaScript Vanilla",
                                },

                                {
                                        id: "",
                                        name: "PHP",
                                },

                                {
                                        id: "",
                                        name: "SQL",
                                },

                                {
                                        id: "",
                                        name: "MySQL & Adminer / phpMyAdmin",
                                },

                                {
                                        id: "",
                                        name: "NoSQL",
                                },

                                {
                                        id: "",
                                        name: "MongoDB & Mongoose",
                                },

                                {
                                        id: "",
                                        name: "Node.js",
                                },

                                {
                                        id: "",
                                        name: "Express.js",
                                },

                                {
                                        id: "",
                                        name: "Axios",
                                },

                                {
                                        id: "",
                                        name: "API",
                                },

                                {
                                        id: "",
                                        name: "Sass",
                                },

                                {
                                        id: "",
                                        name: "Reset.css",
                                },

                                {
                                        id: "",
                                        name: "jQuery",
                                },

                                {
                                        id: "",
                                        name: "Vue.js 3",
                                },

                                {
                                        id: "",
                                        name: "WordPress No-Code",
                                },

                                {
                                        id: "",
                                        name: "WordPress Code",
                                },

                                {
                                        id: "",
                                        name: "POO",
                                },

                                {
                                        id: "",
                                        name: "Git & GitHub",
                                },

                                {
                                        id: "",
                                        name: "NPM",
                                },

                                {
                                        id: "",
                                        name: "Composer",
                                },
                        ]
                }
        },

        methods: {
                openSection() {
                        if (this.isHardskillsSectionOpen === false) {
                                this.isHardskillsSectionOpen = true;
                        } else {
                                this.isHardskillsSectionOpen = false;
                        }
                }
        }
}

</script>