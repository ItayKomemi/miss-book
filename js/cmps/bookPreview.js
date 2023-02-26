export default {
    props: ['book'],
    template: `
        <article class="book-preview">
            <h2>{{ book.title }}</h2>
            <h3>{{ book.maxPriice }}</h3>
        </article>
    `,
}