import { asyncStorageService } from './async-storage.service.js'
import { saveToStorage } from './util.service.js'

export const bookService = {
    query,
    get,
    removeBook
}

const BOOK_DB_KEYS = {
    books: 'miss_books'
}

function query(filterBy = {}) {
    return asyncStorageService.query(BOOK_DB_KEYS.books)
        .then(books => {
            if (books.length === 0 || !books) {
                books = _createBooks()
                saveToStorage(BOOK_DB_KEYS.books, books)
            }
            if (filterBy.title !== '') {
                return books.filter((book) => book.title.startsWith(filterBy.title))
            }
            if (filterBy.price !== '') {
                const price = parseInt(filterBy.price)
                return books.filter((book) => book.listPrice.amount <= price)
            }
            return books
        })
}

function get(bookId) {
    return asyncStorageService.get(BOOK_DB_KEYS.books, bookId)
}

function removeBook(bookId) {
    return asyncStorageService.remove(BOOK_DB_KEYS.books, bookId)
}

function _createBooks() {
    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
    const books = []
    for (let i = 0; i < 20; i++) {
        const book = {
            id: utilService.makeId(),
            title: utilService.makeLorem(2),
            subtitle: utilService.makeLorem(4),
            authors: [
                utilService.makeLorem(1)
            ],
            publishedDate: utilService.getRandomIntInclusive(1950, 2024),
            description: utilService.makeLorem(20),
            pageCount: utilService.getRandomIntInclusive(20, 600),
            categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
            thumbnail: `http://coding-academy.org/books-photos/${i + 1}.jpg`,
            language: "en",
            listPrice: {
                amount: utilService.getRandomIntInclusive(80, 500),
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        books.push(book)
    }
    return books
}