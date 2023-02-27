const { createApp } = Vue

import {router} from './routes.js'

import userMsg from './cmps/userMsg.js'
import appHeader from "./cmps/appHeader.js"
import appFooter from "./cmps/appFooter.js"

const options = {
  template: `
        <section class="container">
            <appHeader @setRoute="route = $event"/>
            <main class="router-view">
            <RouterView />

            </main>
            <appFooter />
            <userMsg />
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
    userMsg,
  },
}

const app = createApp(options)
app.use(router)
app.mount("#app")
