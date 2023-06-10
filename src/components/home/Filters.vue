<template>

        <section class="general-filters">
                <div class="general-filters__all-filters">
                        <div 
                        class="general-filters__all-filters__one-filter" 
                        v-for="(filter, index) in filtersList"
                        :class="{ 'not-selected-filter' : !filter.isFilterSelected, 'selected-filter' : filter.isFilterSelected }"
                        @click="clickedFilter(index)">
                                {{ filter.name }}
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
                                        name: "Front-end",
                                        isFilterSelected: true,
                                },
                                {
                                        name: "Back-end",
                                        isFilterSelected: true,
                                },
                                {
                                        name: "Fullstack",
                                        isFilterSelected: true,
                                },
                                {
                                        name: "No Code",
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
                                this.filtersList[i].isFilterSelected = false;
                        } else {
                                this.filtersList[i].isFilterSelected = true;
                        }
                }, 

                deselectAllFilters() {
                        this.filtersList.forEach(filter => {
                                filter.isFilterSelected = false;
                        })
                }
        }
}

</script>