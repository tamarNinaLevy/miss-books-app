const { useState, useEffect } = React

import { BookList } from "./BookList.jsx";
import { BookDetails } from "./BookDetails.jsx";
import { Filter } from "./Filter.jsx";

import { bookService } from "../services/book.service.js";

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [book, setBook] = useState(null)
    const [filterBy, setFilterBy] = useState({ title: '', price: '' })

    useEffect(() => {
        loadBooks(filterBy)
    }, [filterBy])

    useEffect(() => {
        selectedBookId && showSelected()
    }, [selectedBookId])

    function loadBooks(filterBy) {
        bookService.query(filterBy)
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
            <h1 className="index-header">Book Index</h1>
            {
                selectedBookId && book ?
                    <BookDetails
                        book={book}
                        goBack={goBack}
                    /> :
                    <React.Fragment>
                        <Filter setFilterBy={setFilterBy} filterBy={filterBy} />
                        <BookList books={books} setSelectedBookId={setSelectedBookId} />
                    </React.Fragment>
            }
        </section>
    )
}