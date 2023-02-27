import longText from "../cmps/longText.js"
import { bookService } from "../service/bookService.js"

export default {
  template: `
        <section class="book-details" v-if="book">
            <h1 v-if="book.listPrice.isOnSale">On Sale 🥳🤩</h1>
            <h2>{{ book.title }}</h2>
            <p>Author: {{authors}}</p>

            <p>published at: {{book.publishedDate}}
               <span>{{checkPublishedDate}}</span> 
            </p>

            <longText :txt="book.description"/>

            <p>Page count: {{book.pageCount}}
                <span>{{getPageCount}}</span>
            </p>
            
            <span>Price: <span :class="counterClass">{{ book.listPrice.amount }}</span></span> <span>{{ book.listPrice.currencyCode }}</span>
            <br>
            <img :src="book.thumbnail" alt=""/>
            <br>
            <RouterLink class="back-button" to="/books">Back to list</RouterLink>
        </section>
    `,
  data() {
    return {
      sentence: "",
      book: null,
    }
  },
  created() {
    const { bookId } = this.$route.params
    bookService.get(bookId).then((book) => (this.book = book))
  },
  methods: {
    closeDetails() {
      this.$emit("hide-details")
    },
  },
  computed: {
    checkPublishedDate() {
      const currYear = new Date().getFullYear()

      if (currYear - this.book.publishedDate > 10) return "Vintage"
      else if (currYear - this.book.publishedDate <= 1) return "New"
    },
    getPageCount() {
      const pageCount = this.book.pageCount
      if (pageCount > 500) return "Serious Reading"
      else if (pageCount > 200) return "Descent Reading"
      else if (pageCount < 100) return "Light Reading"
    },
    counterClass() {
      return {
        "high-price": this.book.listPrice.amount > 150,
        "low-price": this.book.listPrice.amount < 20,
      }
    },
    authors() {
      return this.book.authors.join(', ')
    }
  },
  components: {
    longText,
  },
}
