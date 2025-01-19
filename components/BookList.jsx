import { BookPreview } from "./BookPreview.jsx";

export function BookList({ books, setSelectedBookId }) {

    function onSelectBook(id) {
        setSelectedBookId(id)
    }

    if (books === null) return <div>Loading...</div>

    return (
        <section className="books">
            <h1>Book List</h1>
            {
                books.map((book) => {
                    return <BookPreview
                        imgUrl={book.thumbnail}
                        title={book.title}
                        id={book.id}
                        key={book.id}
                        onSelectBook={onSelectBook}
                    />
                })
            }
        </section>
    )
}