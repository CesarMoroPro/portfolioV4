<template>
        <section id="skills" class="general-skills">
                <h2 id="skills" class="general-h2" @click="openSection">
                        <div v-if="!isSkillsSectionOpen">
                                <font-awesome-icon class="title-icon" :icon="['fas', 'fire-flame-curved']" />Compétences - Skills<font-awesome-icon class="chevron-down-icon" :icon="['fas', 'chevron-down']" />
                        </div>
                        <div v-else>
                                <font-awesome-icon class="title-icon" :icon="['fas', 'fire-flame-curved']" />Compétences - Skills<font-awesome-icon class="cross-icon" :icon="['fas', 'xmark']" />
                        </div>
                        
                </h2>

                <div class="all-skills" v-show="isSkillsSectionOpen"> <!-- Styles définis dans "pages > _home.scss" -->
                       <div class="all-skills__no-up-chevron">
                               <HardskillsComponent></HardskillsComponent>
                               <SoftskillsComponent></SoftskillsComponent>
                       </div>

                        <a href="http://localhost:5173/#skills"><UpChevronComponent></UpChevronComponent></a>
                </div>
        </section>
</template>

<script>
import HardskillsComponent from './Hardskills.vue';
import SoftskillsComponent from './Softskills.vue';
import UpChevronComponent from '../visuals/UpChevron.vue';

export default {
        components: {
                HardskillsComponent,
                SoftskillsComponent,
                UpChevronComponent,
        },

        data() {
                return {
                        isSkillsSectionOpen: false,
                }
        },

        methods: {
                openSection() {
                        if (this.isSkillsSectionOpen === false) {
                                this.isSkillsSectionOpen = true;
                        } else {
                                this.isSkillsSectionOpen = false;
                        }
                }
        },
}

</script>