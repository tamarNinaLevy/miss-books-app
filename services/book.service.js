import { asyncStorageService } from './async-storage.service.js'
import { saveToStorage } from './util.service.js'

import { default_books } from '../books.js'

export const bookService = {
    query,
    get
}

const BOOK_DB_KEYS = {
    books: 'miss_books'
}

function query(filterBy = {}) {
    return asyncStorageService.query(BOOK_DB_KEYS.books)
        .then(books => {
            if (books.length === 0 || !books) {
                books = default_books
                saveToStorage(BOOK_DB_KEYS.books, books)
            }
            if (filterBy.title !== '') {
                return books.filter((book) => book.title.startsWith(filterBy.title))
            }
            if (filterBy.price !== '') {
                const price = parseInt(filterBy.price)
                return books.filter((book) => book.listPrice.amount >= price)
            }
            return books
        })
}

function get(bookId) {
    return asyncStorageService.get(BOOK_DB_KEYS.books, bookId)
}