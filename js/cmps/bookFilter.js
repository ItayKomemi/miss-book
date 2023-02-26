export default {
    template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
                <br>
            <label>Max Price:</label> <input v-model="filterBy.maxPrice" 
            @input="filter" type="range" min="0" max="200"/>
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', maxPrice: 200 },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}