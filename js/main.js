const { createApp } = Vue

import appHeader from "./cmps/appHeader.js"
import appFooter from "./cmps/appFooter.js"

import bookIndex from "./cmps/bookIndex.js"

import homePage from "./pages/homePage.js"
import AboutPage from "./pages/aboutPage.js"

const options = {
  template: `
        <section class="container">
            <appHeader @setRoute="route = $event"/>
            <main class="router-view">
                <homePage v-if="route === 'homePage'"/>
                <bookIndex v-if="route === 'bookIndex'"/>
                <aboutPage v-if="route === 'aboutPage'"/>
            </main>
            <appFooter />
        </section>
    `,
  data() {
    return {
        route: '',
    }
  },
  components: {
    appHeader,
    appFooter,
    bookIndex,
    homePage,
    AboutPage,
  },
}
const app = createApp(options)
app.mount("#app")
