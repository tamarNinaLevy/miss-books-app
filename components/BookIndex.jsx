const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

import { Filter } from "./Filter.jsx"
import { BookList } from "./BookList.jsx"
import { BookDetails } from "./BookDetails.jsx"

import { bookService } from "../services/book.service.js"
import { util } from "../services/util.service.js"

export function BookIndex() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getFilterFromSearchParams(searchParams))
    const [book, setBook] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState({ bookId: '', delete: false, details: false })

    useEffect(() => {
        loadBooks(filterBy)
        setSearchParams(util.getTruthyValues(filterBy))
    }, [filterBy])

    useEffect(() => {
        if (selectedBookId.bookId !== '' && selectedBookId.details) {
            showSelected()
        } else if (selectedBookId.bookId !== '' && selectedBookId.delete) {
            removeBook()
        }
    }, [selectedBookId])

    function loadBooks(filterBy) {
        bookService.query(filterBy)
            .then(setBooks)
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    function removeBook() {
        bookService.removeBook(selectedBookId.bookId)
            .then(() => {
                setBooks((prev) => prev.filter((book) => {
                    return book.id !== bookId
                }))
                setSelectedBookId({ bookId: '', delete: false, details: false })
            })
            .catch(err => console.log('ERR: ', err))
    }

    function showSelected() {
        bookService.get(selectedBookId.bookId)
            .then(setBook)
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }

    function goBack() {
        setSelectedBookId({ bookId: '', delete: false, details: false })
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
                        <BookList
                            books={books}
                            setSelectedBookId={setSelectedBookId}
                            setBooks={setBooks}
                            removeBook={removeBook}
                        />
                    </React.Fragment>
            }
        </section>
    )
}