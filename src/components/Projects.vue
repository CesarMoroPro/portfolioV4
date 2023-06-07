<template>
        <section class="general-projects">
                <h2 id="projects" class="general-h2" @click="openSection">Projets / Projects</h2>

                <section class="general-projects__all-projects" v-show="!isProjectsSectionOpen">
                        <section class="general-projects__all-projects__one-project" v-for="(project, index) in projectsList" :key="index" @mouseover="cardHovered(index)" @mouseout="cardNotHovered(index)">
                                
                                <!--^ CARTE NON SURVOLÉE  -->
                                <div class="general-projects__all-projects__one-project__normal-display" v-show="!project.isCardHovered">
                                        <div class="general-projects__all-projects__one-project__normal-display__title">
                                                <h3>{{ project.title }}</h3>
                                        </div>
                                        <div class="general-projects__all-projects__one-project__normal-display__date">
                                                <p>Date de publication : {{ project.date }}</p>
                                        </div>
                                        <div class="general-projects__all-projects__one-project__normal-display__img">
                                                <img class="thumbnail" :src="project.image" alt="Vignette du projet concerné"/>
                                        </div>
                                </div>

                                <!--^ AU SURVOL DE LA CARTE -->
                                <div class="general-projects__all-projects__one-project__card-hovered" v-show="project.isCardHovered">
                                        <div class="general-projects__all-projects__one-project__card-hovered__technologies" >
                                                <ul class="each-techno" v-for="(techno, index) in project.technos" :key="index">
                                                        <li>{{ techno }}</li>
                                                </ul>
                                        </div>

                                        <p class="general-projects__all-projects__one-project__card-hovered__excerpt">{{ project.excerpt }}</p>
                                        
                                        <div class="general-projects__all-projects__one-project__card-hovered__icons">
                                                        <a :href="project.linkProject" class="projects-icons"> <font-awesome-icon :icon="['fas', 'globe']" size="2xl" fade /></a>
                                                        <a :href="project.githubLink" class="projects-icons" v-show="project.githubIcon"><font-awesome-icon :icon="['fab', 'github']" size="2xl" fade /></a>
                                                        <a :href="project.youtubeLink" class="projects-icons" v-show="project.youtubeIcon"><font-awesome-icon :icon="['fab', 'youtube']" size="2xl" fade /></a>
                                                        <i class="projects-icons" v-show="project.wordpressIcon"><font-awesome-icon :icon="['fab', 'wordpress']" size="2xl" /></i>
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
                        projectsList: [

                                /* Hello Macros */
                                {
                                        isCardHovered: false,
                                        title: "Hello Macros !",
                                        date: "30/05/2023",
                                        image: imgHelloMacros,
                                        technos: [
                                                "Html", "Css - Sass", "Vue3.js", "Vite.js", "Git", "Responsive", "Statique"
                                        ],
                                        finition: "front-end",
                                        linkProject: "https://hello-macros.cesar-moro.fr",
                                        excerpt: "Ce projet est calculateur de macros-nutriments, fonctionnel et basé sur de vraies formules scientifiques. Le Front-end est développé avec Vue3.js. Quant au Back-end, il est prévu de le réaliser en Node.js avec consommation d'API.",
                                        githubLink: "https://github.com/CesarMoroPro/macro-nutrition",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: false,
                                        wordpressIcon: false,
                                },

                                /* Portfolio */
                                {
                                        isCardHovered: false,
                                        title: "Mon Portfolio V3",
                                        date: "23/03/2023",
                                        image: imgPortfolioV3,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        finition: "front-end",
                                        linkProject: "https://cesar-moro.fr",
                                        excerpt: "Ce projet est mon portfolio, sur lequel vous vous trouvez actuellement ! La version dynamique avec un back-end Node.js est en cours de développement",
                                        githubLink: "https://github.com/CesarMoroPro/portfolio-Vue.js",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: true,
                                        wordpressIcon: false,

                                },

                                /* Todo-List */
                                {
                                        isCardHovered: false,
                                        title: "Todo List",
                                        date: "28/02/2023",
                                        image: imgTodoList,
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        finition: "front-end",
                                        linkProject: "https://todo-list.cesar-moro.fr",
                                        excerpt: "Traditionnel projet pour tout développeur junior, je n'ai pu y échapper. Alors, je me suis laissé aller sur le style. Une version Full avec un back-end géré en Node.js arrivera dans une version ultérieure.",
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
                                                "HTML", "CSS", "JavaScript", "PHP", "SQL",
                                        ],
                                        finition: "fullstack",
                                        linkProject: "https://acmweb.fr",
                                        excerpt: "Projet de site vitrine réalisé pour une rédactrice web, avec le CMS WordPress et le thème DIVI (en no-code).",
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
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        finition: "front-end",
                                        linkProject: "https://free-ocean.cesar-moro.fr",
                                        excerpt: "Projet réalisé en Vanilla JavaScript, dont l'objectif était de développer la programmation fonctionnelle. Ce mini-jeu nécessite une version 1.2 afin de corriger quelques petits bugs. Projet non-responsive, je vous conseille de l'essayer sur ordinateur. ⚠️ ATTENTION : le repo Github n'est pas à jour suite à de nombreuses mauvaises manipulations.",
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
                                                "HTML", "CSS", "JavaScript", "PHP", "SQL",
                                        ],
                                        finition: "fullstack",
                                        linkProject: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        excerpt: "Projet de fin de formation réalisé en pair-programming, en conditions réelles de travail en entreprise. Formation Développeur Web et Web Mobile de 6 mois, au sein de l'école O'clock",
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

                cardHovered(i) {
                        this.projectsList[i].isCardHovered = true;
                },
                
                cardNotHovered(i) {
                        this.projectsList[i].isCardHovered = false;
                },
        }
}

</script>