<template>
        <HeaderComponent></HeaderComponent>

        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>

                <SeparatorHorizontal></SeparatorHorizontal>

                <section class="all-skills-section"> <!-- Styles définis dans pages > _home.scss -->
                        <HardskillsComponent></HardskillsComponent>
                        <SoftskillsComponent></SoftskillsComponent>
                </section>

                <SeparatorHorizontal></SeparatorHorizontal>
        
                <ProjectsComponent></ProjectsComponent>

                <SeparatorHorizontal></SeparatorHorizontal>
        </section>

</template>

<script>
// Import des SFC
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import HardskillsComponent from './components/Hardskills.vue';
import SoftskillsComponent from './components/Softskills.vue';
import ProjectsComponent from './components/Projects.vue';

import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                HardskillsComponent,
                SoftskillsComponent,
                ProjectsComponent,

                SeparatorHorizontal,
        },
}

</script>
