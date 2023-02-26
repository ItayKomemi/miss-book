export default {
    template: `
        <header class="app-header">
            <h1>Miss-Book</h1>
            <nav>
                <a @click="setRoute('homePage')" href="#">Home</a>
                <a @click="setRoute('bookIndex')" href="#">Books</a>
                <a @click="setRoute('aboutPage')" href="#">About</a>
            </nav>
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('set-route', route)
        }
    }
}