<template>
        <HeaderComponent></HeaderComponent>

        <SeparatorHorizontal></SeparatorHorizontal>

        <section class="general-section">
                <AboutComponent></AboutComponent>
                
                <SeparatorHorizontal></SeparatorHorizontal>

                <HardskillsComponent></HardskillsComponent>
        </section>
</template>

<script>
// Import des SFC
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import HardskillsComponent from './components/Hardskills.vue';

import SeparatorHorizontal from './components/SeparatorHorizontal.vue';

export default {
        components: {
                HeaderComponent,
                AboutComponent,
                HardskillsComponent,

                SeparatorHorizontal,
        },
}

</script>
