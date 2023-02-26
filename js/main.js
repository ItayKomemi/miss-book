const { createApp } = Vue

import appHeader from "./cmps/appHeader.js"
import appFooter from "./cmps/appFooter.js"
import homePage from "./pages/homePage.js"
import AboutPage from "./pages/aboutPage.js"

const options = {
  template: `
        <section class="container">
            <appHeader @setRoute="route = $event"/>
            <main class="router-view">
                <homePage v-if="route === 'HomePage'"/>
                <aboutPage v-if="route === 'AboutPage'"/>
            </main>
            <appFooter />
        </section>
    `,
  data() {
    return {
        route: 'HomePage',
    }
  },
  components: {
    appHeader,
    appFooter,
    homePage,
    AboutPage,
  },
}
const app = createApp(options)
app.mount("#app")
