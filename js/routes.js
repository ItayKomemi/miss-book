import homePage from './pages/homePage.js'
import aboutPage from './pages/aboutPage.js'
import bookIndex from './pages/bookIndex.js'
import bookDetails from './pages/bookDetails.js'
import bookEdit from './pages/bookEdit.js'

const { createRouter, createWebHashHistory } = VueRouter
const options = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: homePage,
    },
    {
      path: '/about',
      component: aboutPage,
    },
    {
      path: '/books',
      component: bookIndex,
    },
    {
      path: '/books/:bookId',
      component: bookDetails,
    },
    {
      path: '/books/edit/:bookId?',
      component: bookEdit,
    },
    // Last fallback if no route was matched:
    {
      path: '/:catchAll(.*)',
      component: aboutPage,
    },
  ],
}
export const router = createRouter(options)
