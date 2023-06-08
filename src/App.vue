<template>
        <HeaderComponent></HeaderComponent>

        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>

                <SeparatorHorizontal></SeparatorHorizontal>

                <h2 id="projects" class="general-h2" @click="openSection">Compétences / Skills</h2>
                <section class="all-skills-section" v-show="isSkillsSectionOpen"> <!-- Styles définis dans "pages > _home.scss" -->
                        <HardskillsComponent></HardskillsComponent>
                        <SoftskillsComponent></SoftskillsComponent>
                </section>

                <SeparatorHorizontal></SeparatorHorizontal>
        
                <ProjectsComponent></ProjectsComponent>
        </section>

        <SeparatorHorizontal></SeparatorHorizontal>

        <FooterComponent></FooterComponent>

</template>

<script>
// Import des SFC
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import HardskillsComponent from './components/Hardskills.vue';
import SoftskillsComponent from './components/Softskills.vue';
import ProjectsComponent from './components/Projects.vue';
import FooterComponent from './components/Footer.vue';

import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                HardskillsComponent,
                SoftskillsComponent,
                ProjectsComponent,
                FooterComponent,

                SeparatorHorizontal,
        },

        data() {
                return {
                        isSkillsSectionOpen: false,
                }
        },

        openSection() {
                if (this.isSkillsSectionOpen === false) {
                        console.log(this.isSkillsSectionOpen);
                        this.isSkillsSectionOpen = true;
                } else {
                        console.log(this.isSkillsSectionOpen);
                        this.isSkillsSectionOpen = false;
                }
        },
}

</script>
