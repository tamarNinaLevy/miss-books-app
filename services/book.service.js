import { asyncStorageService } from './async-storage.service.js'

import { default_books } from '../books.js'

export const bookService = {
    query,
}

const BOOK_DB_KEYS = {
    books: 'miss_books'
}

function query(filterBy = {}) {
    return asyncStorageService.query(BOOK_DB_KEYS.books)
        .then(books => {
            if (books.length === 0 || !books) {
                books = default_books
                asyncStorageService.post(books)
            }
            return books
        })
}