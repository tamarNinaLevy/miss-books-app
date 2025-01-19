const { useState, useEffect } = React

import { BookList } from "./BookList.jsx";

import { bookService } from "../services/book.service.js";
import { BookDetails } from "./BookDetails.jsx";

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    useEffect(() => {
        selectedBookId && showSelected()
    }, [selectedBookId])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    function showSelected() {
        bookService.get(selectedBookId)
            .then(setBook)
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    function goBack() {
        setSelectedBookId(null)
        setBook(null)
    }

    return (
        <section>
            <h1>Book Index</h1>
            {
                selectedBookId && book ?
                    <BookDetails
                        book={book}
                        goBack={goBack}
                    /> :
                    <BookList books={books} setSelectedBookId={setSelectedBookId} />
            }
        </section>
    )
}