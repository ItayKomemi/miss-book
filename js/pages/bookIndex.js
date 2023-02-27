import { bookService } from "../service/bookService.js"
import { eventBusService } from '../service/event-bus.service.js'
import bookFilter from "../cmps/bookFilter.js"
import bookList from "../cmps/bookList.js"

export default {
  template: `
        <section class="book-index">
            <div class="search-container">
        <RouterLink class="add-book" to="/books/edit">Add a book</RouterLink>
            <bookFilter @filter="setFilterBy"/>
            </div>
            <bookList 
                :books="filteredBooks" 
                v-if="books && !selectedBook"
                @remove="removeBook" 
                @show-details="showBookDetails" />
        </section>
        `,
  data() {
    return {
      books: [],
      selectedBook: null,
      filterBy: { maxPrice: 200 },
    }
  },
  methods: {
    removeBook(bookId) {
      bookService.remove(bookId).then(() => {
        const idx = this.books.findIndex((book) => book.id === bookId)
        this.books.splice(idx, 1)
        eventBusService.emit('show-msg', { txt: 'Book removed', type: 'success' })
    })
    .catch(err=>{
        eventBusService.emit('show-msg', { txt: 'Book remove failed', type: 'error' })
    })
      
    },
    showBookDetails(bookId) {
      this.selectedBook = this.books.find((book) => book.id === bookId)
    },
    onSaveBook(newBook) {
      this.books.unshift(newBook)
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredBooks() {
      const regex = new RegExp(this.filterBy.title, "i")
      return this.books.filter(
        (book) =>
          regex.test(book.title) &&
          this.filterBy.maxPrice > book.listPrice.amount
      )
    },
  },
  created() {
    bookService.query().then((books) => (this.books = books))
  },
  components: {
    bookFilter,
    bookList,
  },
}
