<template>

        <section class="general-filters">
                <div class="general-filters__all-filters">
                        <div 
                        class="general-filters__all-filters__one-filter" 
                        v-for="(filter, index) in filtersList"
                        :class="{ 'not-selected-filter' : !filter.isFilterSelected, 'selected-filter' : filter.isFilterSelected }"
                        @click="clickedFilter(index)">
                                {{ filter.finition.toUpperCase() }}
                        </div>
                </div>

                <div class="general-filters__deselect-all" @click="deselectAllFilters">Désélectionner tous les filtres</div>
        </section>

</template>

<script>

export default {
        data() {
                return {
                        filtersList: [
                                {
                                        finition: "front-end",
                                        isFilterSelected: true,
                                },
                                {
                                        finition: "back-end",
                                        isFilterSelected: true,
                                },
                                {
                                        finition: "fullstack",
                                        isFilterSelected: true,
                                },
                                {
                                        finition: "no code",
                                        isFilterSelected: true,
                                },
                        ]
                }
        },

        methods: {
                clickedFilter(i) {
                        /* Je crée une condition en fonction de l'index reçu par l'élément cliqué (son index dans le tableau "filtersList") */
                        /* Si la propriété "isFilterSelected" du filtre situé dans le tableau "filtersList" à l'index "i" (fourni au moment du click)
                        Alors ... Sinon ... */
                        if (this.filtersList[i].isFilterSelected === true) {
                                /* Si la propriété isFilterSelected vaut TRUE, au clic, elle devient FALSE */
                                this.filtersList[i].isFilterSelected = false;

                                /* Donc je dois masquer les projets puisque le filtre est maintenant désélectionné */
                                this.projectsList.forEach(project => {
                                /* Pour chaque projet, 
                                Si la finition d'un projet vaut la finition du filtre, 
                                puisqu'on est dans le cas d'un filtre désactivé,
                                alors la props project.displayProject devient false */
                                if (project.finition === this.filtersList[i].finition) {
                                        return project.displayProject = false;
                                }
                        });

                        } else {
                                /* Si la propriété isFilterSelected vaut FALSE, alors elle devient TRUE */
                                this.filtersList[i].isFilterSelected = true;

                                /* Donc je dois afficher les projets puisque le filtre est de nouveau sélectionné */
                                this.projectsList.forEach(project => {
                                        /* Pour chaque projet,
                                        Si la finition d'un projet vaut la finition du filtre,
                                        puisqu'on est dans le cas d'un filtre activé,
                                        alors la props project.displayProject devient true */
                                        if (project.finition === this.filtersList[i].finition) {
                                                return project.displayProject = true;
                                        }
                                })
                        }
                },

                deselectAllFilters() {
                        this.filtersList.forEach(filter => {
                                filter.isFilterSelected = false;
                        });

                        /* Donc je dois masquer tous les projets puisqu'ici tous les filtres sont désactivés */
                        this.projectsList.forEach(project => {
                                project.displayProject = false;
                        })
                },
        },

        props: {
                projectsList: {
                        type: Array,
                }
        }
}

</script>