import { bookService } from "../service/bookService.js"
import { googleService } from "../service/googleBookService.js"

export default {
  template: `
        <section class="bookAdd-page">

            <h2>Search a book from Google</h2>
              
            <form @submit.prevent="searchBook">
            <label>Find book: </label>
            <input v-model="val" placeholder="Type here" type="text" />   
            <button @click="searchBook" class="bookAdd-btn">Search!</button>
            <RouterView />
            </form>

            <ul v-if="books" class="bookAdd-ul" v-for="book in books">
                <li>Book title: {{book.volumeInfo.title}}</li>
                <button @click="saveBook(book)" class="bookAdd-btn-ul">➕</button>
            </ul>

        </section>
      `,
  data() {
        return {
            val: '',
            books: null,   
        }
  },    

  methods: {
    searchBook() {
       this.books = googleService.query(this.val)
        this.val = ''
    },
    saveBook(book) {
        console.log(book);
        bookService.addGoogleBook(book)
    }
  },
}
