<template>
        <HeaderComponent></HeaderComponent>

        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>

                <SeparatorHorizontal></SeparatorHorizontal>

                <SkillsComponent></SkillsComponent>

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
import SkillsComponent from './components/Skills.vue';
import ProjectsComponent from './components/Projects.vue';
import FooterComponent from './components/Footer.vue';

import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                SkillsComponent,
                ProjectsComponent,
                FooterComponent,

                SeparatorHorizontal,
        },
}

</script>
