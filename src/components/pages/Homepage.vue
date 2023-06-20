<template>
        <HeaderComponent></HeaderComponent>
        <!-- <DarkmodeComponent></DarkmodeComponent> -->
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
import HeaderComponent from '../layouts/Header.vue';
import AboutComponent from '../home/About.vue';
import SkillsComponent from '../home/Skills.vue';
import ProjectsComponent from '../home/Projects.vue';
import ContactComponent from '../generals/Contact.vue';
import FooterComponent from '../layouts/Footer.vue';

import DarkmodeComponent from '../visuals/Darkmode.vue';
import SocialComponent from '../generals/Social.vue';
import SeparatorHorizontal from '../visuals/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                SkillsComponent,
                ProjectsComponent,
                ContactComponent,
                FooterComponent,

                DarkmodeComponent,
                SocialComponent,
                SeparatorHorizontal,
        },
        }
</script>