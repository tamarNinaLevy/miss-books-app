import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, setSelectedBookId }) {

    function onSelectOrRemoveBook(bookId, from) {
        setSelectedBookId((prev) => {
            const copy = { ...prev, bookId }
            copy[from] = true
            return copy
        })
    }

    if (books === null) return <div>Loading...</div>

    return (
        <section className="books">
            {
                books.map((book) => {
                    return <div className="preview" key={book.id}>
                        <BookPreview
                            title={book.title}
                            imgUrl={book.thumbnail}
                        />
                        <div className="btns">
                            <input type="button" className="clear-filter" value="Details" id={book.id} onClick={() => onSelectOrRemoveBook(book.id, 'details')} />
                            <input type="button" className="clear-filter" value="Delete" id={book.id} onClick={() => onSelectOrRemoveBook(book.id, 'delete')} />
                        </div>
                    </div>
                })
            }
        </section>
    )
}