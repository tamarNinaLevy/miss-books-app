import { BookDetails } from "./BookDetails.jsx";

export function BookList({ books }) {

    if (books === null) return <div>Loading...</div>

    return (
        <section className="books">
            <h1>Book List</h1>
            {
                books.map((book) => {
                    return <BookDetails book={book} key={book.id}/>
                })
            }
        </section>
    )
}