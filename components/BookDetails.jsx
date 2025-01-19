export function BookDetails({ book, goBack }) {
    return (
        <div className="book-details">
            <div className="details">
                <h1>{book.title}</h1>
                <h3>{book.subtitle}</h3>
                <div>
                    <h4>Authors:</h4>
                    {book.authors.map((author) => {
                        return <React.Fragment>
                            <span key={author}>{author}</span>
                            <br />
                        </React.Fragment>
                    })}
                </div>
                <div>
                    <h4>Categories:</h4>
                    {book.categories.map((category) => {
                        return <React.Fragment>
                            <span key={category}>{category}</span>
                            <br />
                        </React.Fragment>
                    })}
                </div>
                <span>Published: {book.publishedDate}</span>
                <p>{book.description}</p>
                <span>Pages: {book.pageCount}</span>
                <span>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</span>
                <input type="button" value="go back" onClick={goBack} />
            </div>
            <img className="book-img" src={book.thumbnail} />
        </div>
    )
}