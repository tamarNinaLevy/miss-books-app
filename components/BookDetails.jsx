export function BookDetails({ book }) {
    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <span>{book.publishedDate}</span>
            <p>{book.description}</p>
        </div>
    )
}