import longText from "../cmps/longText.js"
import { bookService } from "../service/bookService.js"
import addReview from "../cmps/addReview.js"
import reviewList from "../cmps/reviewList.js"

export default {
  template: `
          
          <section class="book-details" v-if="book">
            <nav>
              <RouterLink :to="'/books/' + book.prevBookId"><span class="go-through-book">Previous Book</span></RouterLink>|
              <RouterLink :to="'/books/' + book.nextBookId"><span class="go-through-book">Next Book</span></RouterLink>
            </nav>
            
            <h1 v-if="book.listPrice.isOnSale">On Sale 🥳🤩</h1>
            <h2><span>Title: </span> {{ book.title }}</h2>
            <p><span>Author: </span> {{authors}}</p>
            

            <p><span>published at: </span> {{book.publishedDate}}
              <span>{{checkPublishedDate}}</span> 
            </p>
            
           <span>Description: </span> <longText :txt="book.description"/>

            <p><span>Page</span> count: {{book.pageCount}}
              <span>{{getPageCount}}</span>
            </p>
            
            <span>Price:</span> <span :class="counterClass">{{ book.listPrice.amount }}</span> <span>{{ book.listPrice.currencyCode }}</span>
            <br>
            <img :src="book.thumbnail" alt=""/>
            <br>
            <RouterLink to="/books"><span class="back-button">Back to list</span></RouterLink>
            
            <addReview :bookId="book.id"/>
            <h2>Reviews:</h2>
            <reviewList :book="book"/>
        </section>
    `,
  data() {
    return {
      sentence: "",
      book: null,
    }
  },
  created() {
    this.loadBook()
    const { bookId } = this.$route.params
    bookService.get(bookId).then((book) => (this.book = book))
  },
  methods: {
    loadBook() {
      bookService.get(this.bookId)
          .then(book => this.book = book)
  },
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
    bookId() {
      return this.$route.params.bookId
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
      return this.book.authors.join(", ")
    },
  },
  watch: {
    bookId() {
        console.log('Book Id Changed!')
        this.loadBook()
    }
  },
  components: {
    longText,
    addReview,
    reviewList,
  },
}
