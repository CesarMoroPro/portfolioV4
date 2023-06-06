<template>
        <section class="general-projects">
                <h2 id="projects" class="general-h2" @click="openSection">Projets / Projects</h2>

                <div class="general-projects__all-projects" v-show="isProjectsSectionOpen">
                        <div class="french-bio">
                                <p>test</p>
                        </div>
                </div>
        </section>
</template>

<script>

export default {
        data() {
                return {
                        isProjectsSectionOpen: false,
                }
        },

        methods: {
                openSection() {
                        if (this.isProjectsSectionOpen === false) {
                                this.isProjectsSectionOpen = true;
                        } else {
                                this.isProjectsSectionOpen = false;
                        }
                }
        }
}

</script>