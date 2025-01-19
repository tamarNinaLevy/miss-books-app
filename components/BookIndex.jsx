const { useState, useEffect } = React

import { BookList } from "./BookList.jsx";

import { bookService } from "../services/book.service.js";

export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    return (
        <section>
            <h1>Book Index</h1>
            <BookList books={books} />
        </section>
    )
}