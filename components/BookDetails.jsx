export function BookDetails({ book, goBack }) {
    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <span>{book.publishedDate}</span>
            <p>{book.description}</p>
            <input type="button" value="go back" onClick={goBack} />
        </div>
    )
}