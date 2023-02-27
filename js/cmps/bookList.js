import bookPreview from './bookPreview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
            <ul class="book-card">
                <li v-for="book in books" :key="book.id">
                    <bookPreview :book="book"/>
                    <RouterLink :to="'/books/'+book.id">Details</RouterLink> |
                    <RouterLink :to="'/books/edit/'+book.id">Edit</RouterLink> |
                    <button @click="remove(book.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        showDetails(bookId){
            this.$emit('show-details', bookId)
        },
    },
    components: {
        bookPreview,
    }
}