<template>
        <HeaderComponent></HeaderComponent>

        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>

                <SeparatorHorizontal></SeparatorHorizontal>

                <HardskillsComponent></HardskillsComponent>
                <SoftskillsComponent></SoftskillsComponent>

                <SeparatorHorizontal></SeparatorHorizontal>
        </section>
</template>

<script>
// Import des SFC
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import HardskillsComponent from './components/Hardskills.vue';
import SoftskillsComponent from './components/Softskills.vue';

import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                HardskillsComponent,
                SoftskillsComponent,

                SeparatorHorizontal,
        },
}

</script>
