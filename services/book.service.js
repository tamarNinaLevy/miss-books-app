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
            if (filterBy.name && filterBy.name !== '') {
                return books.filter((book) => book.title.startsWith(filterBy.name))
                    .sort((b1, b2) => b1.title.localeCompare(b2.title) * filterBy.order)
            }
            if (filterBy.price && filterBy.price !== '') {
                const price = parseInt(filterBy.price)
                return books.filter((book) => book.listPrice.amount >= price)
                    .sort((b1, b2) => (b1.listPrice.amount - b2.listPrice.amount) * filterBy.order)
            }
            return books
        })
}

function get(bookId) {
    return asyncStorageService.get(BOOK_DB_KEYS.books, bookId)
}