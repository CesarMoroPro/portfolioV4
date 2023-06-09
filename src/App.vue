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
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import SkillsComponent from './components/Skills.vue';
import ProjectsComponent from './components/Projects.vue';
import ContactComponent from './components/Contact.vue';
import FooterComponent from './components/Footer.vue';

import SocialComponent from './components/Social.vue';
import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

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
