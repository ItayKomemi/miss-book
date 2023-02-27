export default {

    props: ["book"] ,
    template: `
         <div class="review-list" v-for="review in book.reviews" :key="review.id">

            <button>x</button>
            <h3>Username: {{review.name}}</h3>
            <p>Book rating: {{review.rate}}</p>
            <span>Read date: {{review.readAt}}</span>
         </div>   
    
    `,
}