export default {
  props: ["book"],
  template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <p>Author: {{book.authors[0]}}</p>
            <p>published at: {{book.publishedDate}}
               <span v-if="book.publishedDate > 10">Vintage</span> 
               <span v-else-if="book.publishedDate < 1">New</span> 
            </p>
            <p>Description: <br> {{book.description}}</p>
            <p>Page count: {{book.pageCount}}
                <span v-if="book.pageCount > 500">Serious Reading</span>
                <span v-else-if="book.pageCount > 200">Descent Reading</span>
                <span v-else-if="book.pageCount < 100">Light Reading</span>
            </p>
            <span>Price: {{ book.listPrice.amount }}</span> <span>{{ book.listPrice.currencyCode }}</span>
            <br>
            <img :src="book.thumbnail" alt=""/>
            <button @click="closeDetails">Close</button>
        </section>
    `,
  methods: {
    closeDetails() {
      this.$emit("hide-details")
    },
  },
  computed: {
    counterClass() {},
  },
}
