import { bookService } from "../service/bookService.js"


export default {
  props: ["bookId"],
  template: `
    <div class="review-layout">
        <h2 class="review" @click="toggelClicked">Add a review</h2>

        <form v-if="isClicked" @submit.prevent="saveReview">
            <label for="userName">Username: </label>
            <input v-model="userReview.name" placeholder="Type here" type="text" />
            <br>

            <label for="chooseRate">Rate the book: </label>
            <select name="chooseRate" v-model="userReview.rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <label for="readAt">Read at: </label>
            <input v-model="userReview.readAt" type="date" id="readAt" name="trip-start"
            min="2018-01-01" max="2023-12-31">
            
            <br>
            <button>Save review</button>
        </form>
    </div>
    `,
  data() {
    return {
      isClicked: false,
      userReview: { name: "", rate: 1, readAt: null },
    }
  },
  methods: {
    toggelClicked() {
      return (this.isClicked = !this.isClicked)
    },
    saveReview() {
      bookService.addReview(this.bookId,this.userReview)
    },
  },

  components: {
    bookService,
  },
}
