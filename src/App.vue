<template>
        <HeaderComponent></HeaderComponent>
        <SocialComponent></SocialComponent>
        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>
                <SeparatorHorizontal></SeparatorHorizontal>
                <SkillsComponent></SkillsComponent>
                <SeparatorHorizontal></SeparatorHorizontal>
                <ProjectsComponent></ProjectsComponent>
                <SeparatorHorizontal></SeparatorHorizontal>
                <ContactComponent></ContactComponent>
        </section>

        <SeparatorHorizontal></SeparatorHorizontal>
        <FooterComponent></FooterComponent>

</template>

<script>
// Import des SFC
import HeaderComponent from './components/layouts/Header.vue';
import AboutComponent from './components/home/About.vue';
import SkillsComponent from './components/home/Skills.vue';
import ProjectsComponent from './components/home/Projects.vue';
import ContactComponent from './components/generals/Contact.vue';
import FooterComponent from './components/layouts/Footer.vue';

import SocialComponent from './components/generals/Social.vue';
import SeparatorHorizontal from './components/visuals/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                SkillsComponent,
                ProjectsComponent,
                ContactComponent,
                FooterComponent,

                SocialComponent,
                SeparatorHorizontal,
        },
}

</script>
