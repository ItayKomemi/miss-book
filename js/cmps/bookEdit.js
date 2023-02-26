import { bookService } from "../service/bookService.js"

export default {
    template: `
        <section class="book-edit">
            <h2>Add a Book</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="book.title" placeholder="Title">
                <input type="number" v-model.number="book.maxPrice">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            bookService.save(this.car)
                .then(savedBook => {
                    this.book = bookService.getEmptyBook()
                    this.$emit('book-saved', savedBook)
                })
        }
    }
}