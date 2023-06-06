<template>
        <section class="general-projects">
                <h2 id="projects" class="general-h2" @click="openSection">Projets / Projects</h2>

                <section class="general-projects__all-projects" v-show="isProjectsSectionOpen">
                        <div class="one-project">
                                
                        </div>
                </section>
        </section>
</template>

<script>
//* Import des images EN STATIQUE
/* Pourquoi importer les images ?
Le build de Vite ne sait pas forcément prendre tous les assets pour les inclure dans le répertoire `dist > assets`.
En faisant un import des images, le build se fait correctement.
https://cloudinary.com/blog/handle-image-asset-bundling-using-vite-in-vuejs
*/
// import imgPortfolioV4 from "../assets/img/miniatures-projets/portfolioV4";
import imgHelloMacros from "../assets/img/miniatures-projets/hello-macros/hello-macros.png";
import imgPortfolioV3 from "../assets/img/miniatures-projets/portfolioV3/portfolioV3.png";
import imgTodoList from "../assets/img/miniatures-projets/todo-list/todo-list.png";
import imgAcmWeb from "../assets/img/miniatures-projets/acmweb/acmweb.png";
import imgFreeOcean from "../assets/img/miniatures-projets/free-ocean/free-ocean.png";
import imgDevnest from "../assets/img/miniatures-projets/devnest/devnest.jpg";



export default {
        data() {
                return {
                        isProjectsSectionOpen: false,

                        /* Projects data */
                        projectsList: [

                                /* Hello Macros */
                                {
                                        title: "Hello Macros !",
                                        date: "30/05/2023",
                                        image: imgHelloMacros,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [ "Vue.js 3" ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Vite" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM" ],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["Responsive", "Statique"],
                                                },
                                        ],
                                        linkProject: "https://hello-macros.cesar-moro.fr",
                                        excerpt: "Ce projet est un calculateur de macros-nutriments, géré pour le Front-end par Vue 3, et il est prévu de gérer le back en Node.js avec consommation d'API",
                                        githubLink: "https://github.com/CesarMoroPro/macro-nutrition",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressLink: "",
                                        wordpressIcon: false,
                                        linkDisplay: "Lien vers le repo GitHub",
                                        finition: "front-end",

                                },

                                /* Portfolio */
                                {
                                        title: "Mon Portfolio V3",
                                        date: "23/03/2023",
                                        image: imgPortfolioV3,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [ "Vue.js 3" ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Vite" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Atropos.js", "Rellax.js"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["Responsive", "Statique"],
                                                },
                                        ],
                                        linkProject: "https://cesar-moro.fr",
                                        excerpt: "Ce projet est mon portfolio, sur lequel vous vous trouvez actuellement ! La version dynamique avec un back-end Node.js est en cours de développement",
                                        githubLink: "https://github.com/CesarMoroPro/portfolio-Vue.js",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: true,
                                        wordpressLink: "",
                                        wordpressIcon: false,
                                        linkDisplay: "Lien vers le repo GitHub",
                                        finition: "front-end",

                                },

                                /* Todo-List */
                                {
                                        title: "Todo List",
                                        date: "28/02/2023",
                                        image: imgTodoList,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "reset.css"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["Responsive", "Statique"],
                                                },
                                        ],
                                        linkProject: "https://todo-list.cesar-moro.fr",
                                        excerpt: "Traditionnel projet pour tout développeur junior, je n'ai pu y échapper. Alors, je me suis laissé aller sur le style. Une version Full avec un back-end géré en Node.js arrivera dans une version ultérieure.",
                                        githubLink: "https://github.com/CesarMoroPro/todo-list-js",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressLink: "",
                                        wordpressIcon: false,
                                        linkDisplay: "Lien vers le repo GitHub",
                                        finition: "front-end",

                                },

                                /* AM Web */
                                {
                                        title: "Adeline Web",
                                        date: "31/01/2023",
                                        image: imgAcmWeb,
                                        technos: [
                                                "HTML", "CSS", "JavaScript", "PHP", "SQL",
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: ["WordPress No-Code (DIVI)"],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["Responsive"],
                                                },
                                        ],
                                        linkProject: "https://acmweb.fr",
                                        excerpt: "Projet de site vitrine réalisé pour une rédactrice web, avec le CMS WordPress et le thème DIVI (en no-code).",
                                        githubLink: "",
                                        githubIcon: false,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressLink: "https://acmweb.fr/",
                                        wordpressIcon: true,
                                        linkDisplay: "Lien vers le projet WordPress",
                                        finition: "fullstack",
                                },

                                /* Free-Ocean */
                                {
                                        title: "Mini jeu : Free OCean",
                                        date: "01/10/2022",
                                        image: imgFreeOcean,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["NO Responsive", "Statique"],
                                                },
                                        ],
                                        linkProject: "https://free-ocean.cesar-moro.fr",
                                        excerpt: "Projet réalisé en Vanilla JavaScript, dont l'objectif était de développer la programmation fonctionnelle. Ce mini-jeu nécessite une version 1.2 afin de corriger quelques petits bugs. Projet non-responsive, je vous conseille de l'essayer sur ordinateur. ⚠️ ATTENTION : le repo Github n'est pas à jour suite à de nombreuses mauvaises manipulations.",
                                        githubLink: "https://github.com/CesarMoroPro/miniJeu-freeOcean",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressLink: "",
                                        wordpressIcon: false,
                                        linkDisplay: "Lien vers le repo GitHub",
                                        finition: "front-end",

                                },

                                /* Devnest */
                                {
                                        title: "Devnest",
                                        date: "21/12/2020",
                                        image: imgDevnest,
                                        technos: [
                                                "HTML", "CSS", "JavaScript", "PHP", "SQL",
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Parcel.js" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Isotope-layout"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [ "MySQL", "phpMyAdmin" ],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM", "Composer"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: [ "Responsive", "Dynamique"],
                                                },
                                        ],
                                        linkProject: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        excerpt: "Projet de fin de formation réalisé en pair-programming, en conditions réelles de travail en entreprise. Formation Développeur Web et Web Mobile de 6 mois, au sein de l'école O'clock",
                                        githubLink: "",
                                        githubIcon: false,
                                        youtubeLink: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        youtubeIcon: true,
                                        wordpressLink: "",
                                        wordpressIcon: false,
                                        linkDisplay: "Lien vers la vidéo YouTube",
                                        finition: "fullstack",
                                },

                                ],
                }
        },

        methods: {
                openSection() {
                        if (this.isProjectsSectionOpen === false) {
                                this.isProjectsSectionOpen = true;
                        } else {
                                this.isProjectsSectionOpen = false;
                        }
                }
        }
}

</script>