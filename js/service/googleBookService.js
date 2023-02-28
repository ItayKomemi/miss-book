import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"

export const googleService = {
  query,
  updateBook,
}

function query(txt) {
  console.log(txt);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${txt}`
  axios.get(url).then((res) => {
    console.log(res.data.items)
    return res.data.items
  })
}


function updateBook (book) {
  const newBook = {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors || '' ,
    publishedDate: book.volumeInfo.publishedDate,
    description: book.volumeInfo.description || '',
    pageCount: book.volumeInfo.pageCount,
    listPrice: {amount: utilService.getRandomIntInclusive(20,200)},
    thumbnail: book.volumeInfo.imageLinks.thumbnail 
  }
  return newBook
}
