<template>
        <section id="skills" class="general-skills">
                <h2 id="skills" class="general-h2" @click="openSection">Compétences / Skills</h2>

                <div class="all-skills-section" v-show="isSkillsSectionOpen"> <!-- Styles définis dans "pages > _home.scss" -->
                        <HardskillsComponent></HardskillsComponent>
                        <SoftskillsComponent></SoftskillsComponent>
                </div>
        </section>
</template>

<script>
import HardskillsComponent from './Hardskills.vue';
import SoftskillsComponent from './Softskills.vue';

export default {
        components: {
                HardskillsComponent,
                SoftskillsComponent,
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
        }
}

</script>