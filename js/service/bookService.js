
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import booksDB from "../service/books.json" assert { type: "json" }


const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    addReview,
}


function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
      books = booksDB
      utilService.saveToStorage(BOOK_KEY, books)
    }
  }
  

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.minPrice) {
                books = books.filter(book => book.maxPrice >= filterBy.minPrice)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', maxPrice = 0) {
    return { id: '', title, maxPrice }
}

function addReview(bookId,review) {

    get(bookId)
    .then(book =>{
        if(!book.reviews) book.reviews = []
        book.reviews.push(review)
        save(book)
    })
}