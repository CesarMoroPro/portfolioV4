<template>
        <section class="general-projects">
                <h2 id="projects" class="general-h2" @click="openSection">
                <div v-if="!isProjectsSectionOpen">
                        <font-awesome-icon class="title-icon" :icon="['fas', 'laptop-code']" />Projets - Projects<font-awesome-icon class="chevron-down-icon" :icon="['fas', 'chevron-down']" />
                </div>
                <div v-else>
                        <font-awesome-icon class="title-icon" :icon="['fas', 'laptop-code']" />Projets - Projects<font-awesome-icon class="cross-icon" :icon="['fas', 'xmark']" />
                </div>
                </h2>

                <section class="general-projects__all-projects" v-show="isProjectsSectionOpen">
                        <section class="general-projects__all-projects__one-project" v-for="(project, index) in projectsList" :key="index" @mouseover="cardHovered(index)" @mouseout="cardNotHovered(index)">
                                
                                <!--^ CARTE NON SURVOLÉE  -->
                                <div class="general-projects__all-projects__one-project__normal-display" v-show="!project.isCardHovered">
                                        <div class="general-projects__all-projects__one-project__normal-display__title">
                                                <h3>{{ project.title }}</h3>
                                        </div>
                                        <div class="general-projects__all-projects__one-project__normal-display__date">
                                                <p class="date">Date de publication : {{ project.date }}</p>
                                        </div>
                                        <div class="general-projects__all-projects__one-project__normal-display__img">
                                                <img class="thumbnail" :src="project.image" alt="Vignette du projet concerné"/>
                                        </div>
                                </div>

                                <!--^ AU SURVOL DE LA CARTE -->
                                <div class="general-projects__all-projects__one-project__card-hovered" v-show="project.isCardHovered">

                                        <div class="general-projects__all-projects__one-project__card-hovered__technologies">
                                                <ul class="each-techno-ul-container">
                                                        <li class="each-techno" v-for="(techno, index) in project.technos" :key="index">{{ techno }}</li>
                                                </ul>
                                        </div>

                                        <p class="general-projects__all-projects__one-project__card-hovered__excerpt">{{ project.excerpt }}</p>
                                        
                                        <div class="general-projects__all-projects__one-project__card-hovered__icons">
                                                        <a :href="project.linkProject" class="projects-icons" v-show="project.projectOnLine"> <font-awesome-icon class="icon-size" :icon="['fas', 'globe']" fade /></a>
                                                        <a :href="project.githubLink" class="projects-icons" v-show="project.githubIcon"><font-awesome-icon class="icon-size" :icon="['fab', 'github']" fade /></a>
                                                        <a :href="project.youtubeLink" class="projects-icons" v-show="project.youtubeIcon"><font-awesome-icon class="icon-size" :icon="['fab', 'youtube']" fade /></a>
                                                        <i class="projects-icons" v-show="project.wordpressIcon"><font-awesome-icon class="icon-size" :icon="['fab', 'wordpress']" /></i>
                                        </div>

                                </div>

                        </section>
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
                        /* Attention : pour les propriétés "excerpt", se limiter à 360 caractères */
                        projectsList: [

                                /* Hello Macros */
                                {
                                        isCardHovered: false,
                                        title: "Hello Macros !",
                                        date: "30/05/2023",
                                        image: imgHelloMacros,
                                        technos: [
                                                "Html", "Scss", "Vue3.js", "Vite.js", "Git", "Responsive",
                                        ],
                                        finition: "front-end",
                                        excerpt: "Ce projet est un calculateur de macros-nutriments, fonctionnel et basé sur de vraies formules scientifiques. Un Back-end en Node.js avec consommation d'API est en cours de développement.",
                                        projectOnLine: true,
                                        linkProject: "https://hello-macros.cesar-moro.fr",
                                        githubLink: "https://github.com/CesarMoroPro/macro-nutrition",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: false,
                                },

                                /* Portfolio V3*/
                                {
                                        isCardHovered: false,
                                        title: "Mon Portfolio V3",
                                        date: "23/03/2023",
                                        image: imgPortfolioV3,
                                        technos: [
                                                "Html", "Scss", "Vue.js 3", "Responsive",
                                        ],
                                        finition: "front-end",
                                        excerpt: "Ce projet est mon portfolio Version 3. La V4.0 étant maintenant déployée, cette V3.0. statique reste consultable mais n'est plus maintenue.",
                                        projectOnLine: true,
                                        linkProject: "https://cesar-moro.fr",
                                        githubLink: "https://github.com/CesarMoroPro/portfolio-Vue.js",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: false,

                                },

                                /* Todo-List */
                                {
                                        isCardHovered: false,
                                        title: "Todo List",
                                        date: "28/02/2023",
                                        image: imgTodoList,
                                        technos: [
                                                "Html", "Scss", "JavaScript"
                                        ],
                                        finition: "front-end",
                                        excerpt: "Traditionnel projet pour tout développeur junior, je n'ai pu y échapper. Alors, je me suis laissé aller sur le style. Une version Full avec un back-end géré en Node.js arrivera dans une version ultérieure.",
                                        projectOnLine: true,
                                        linkProject: "https://todo-list.cesar-moro.fr",
                                        githubLink: "https://github.com/CesarMoroPro/todo-list-js",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: false,

                                },

                                /* AM Web */
                                {
                                        isCardHovered: false,
                                        title: "Adeline Web",
                                        date: "31/01/2023",
                                        image: imgAcmWeb,
                                        technos: [
                                                "WordPress (NoCode, DIVI)",
                                        ],
                                        finition: "fullstack",
                                        excerpt: "Projet de site vitrine réalisé pour une rédactrice web, avec le CMS WordPress et le thème DIVI (en no-code).",
                                        projectOnLine: true,
                                        linkProject: "https://acmweb.fr",
                                        githubLink: "",
                                        githubIcon: false,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: true,
                                },

                                /* Free-Ocean */
                                {
                                        isCardHovered: false,
                                        title: "Mini jeu : Free OCean",
                                        date: "01/10/2022",
                                        image: imgFreeOcean,
                                        technos: [
                                                "html", "Scss", " Vanilla JavaScript"
                                        ],
                                        finition: "front-end",
                                        excerpt: "Projet réalisé en Vanilla JavaScript, dont l'objectif était de développer la programmation fonctionnelle. Ce mini-jeu nécessite une version 1.2 afin de corriger quelques petits bugs. Projet non-responsive, je vous conseille de l'essayer sur ordinateur. ⚠️ ATTENTION : le repo Github n'est pas à jour suite à de nombreuses mauvaises manipulations.",
                                        projectOnLine: true,
                                        linkProject: "https://free-ocean.cesar-moro.fr",
                                        githubLink: "https://github.com/CesarMoroPro/miniJeu-freeOcean",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: false,

                                },

                                /* Devnest */
                                {
                                        isCardHovered: false,
                                        title: "Devnest",
                                        date: "21/12/2020",
                                        image: imgDevnest,
                                        technos: [
                                                "Html", "Scss", "JavaScript", "PHP", "SQL", "WordPress (code)",
                                        ],
                                        finition: "fullstack",
                                        excerpt: "Projet de fin de formation réalisé en pair-programming, en conditions réelles de travail en entreprise. Formation Développeur Web et Web Mobile de 6 mois, au sein de l'école O'clock. Ce projet n'a pas été déployé, seule la vidéo de présentation est disponible. N'ayant pas été le LeadDev sur ce projet, je n'ai pas accès au repo Github.",
                                        projectOnLine: false,
                                        linkProject: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        githubLink: "",
                                        githubIcon: false,
                                        youtubeLink: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        youtubeIcon: true,
                                        wordpressIcon: false,
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
                },

                cardHovered(targetIndex) {
                        /* Je passe la variable isCardHovered du projet ciblé à true */
                        this.projectsList[targetIndex].isCardHovered = true;
                },
                
                cardNotHovered(targetIndex) {
                        /* Je passe la variable isCardHovered du projet ciblé à false */
                        this.projectsList[targetIndex].isCardHovered = false;
                },
        }
}

</script>