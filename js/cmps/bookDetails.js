import longText from './longText.js'

export default {
  props: ["book"],
  template: `
        <section class="book-details">
            <h1 v-if="book.listPrice.isOnSale">On Sale</h1>
            <h2>{{ book.title }}</h2>
            <p>Author: {{book.authors[0]}}</p>

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
            <button @click="closeDetails">Close</button>
        </section>
    `,
  data() {
    return {
      sentence: '',
    }
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
        if(pageCount > 500) return 'Serious Reading'
        else if (pageCount > 200) return 'Descent Reading'
        else if (pageCount < 100) return 'Light Reading' 
    },
    counterClass() {
      return {
        "high-price": this.book.listPrice.amount > 150,
        "low-price": this.book.listPrice.amount < 20,
      }
    },
  },
  components: {
    longText,
  }
}
