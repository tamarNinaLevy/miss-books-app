import { LongTxt } from './LongTxt.jsx'
import { SaleSign } from './SaleSign.jsx'

export function BookDetails({ book, goBack }) {

    return (
        <div className="details-container">
            <div className="details flex column justify-center">
                <div className="headers flex column align-center justify-center">
                    <h1>{book.title}</h1>
                    <h3>{book.subtitle}</h3>
                </div>

                <div className="list">
                    <h4>Authors:</h4>
                    <ul>
                        {book.authors.map((author) => {
                            return <li key={author}>{author}</li>
                        })}
                    </ul>
                </div>

                <div className="list">
                    <h4>Categories:</h4>
                    <ul>
                        {book.categories.map((category) => {
                            return <li key={category}>{category}</li>
                        })}
                    </ul>
                </div>

                <div className="other">
                    <span className="bold-font">More details:</span> <br />
                    <span>Published: {book.publishedDate}</span> <br />
                    <span className="bold-font">
                        {
                            new Date().getFullYear() - book.publishedDate >= 10 ?
                                'Vintage' :
                                new Date().getFullYear() - book.publishedDate <= 1 ? 'New!' : ''
                        }
                    </span><br />
                    <span>Pages: {book.pageCount}</span> <br />
                    <span className="bold-font">
                        {
                            book.pageCount > 500 ?
                                'Serious reading' :
                                book.pageCount > 200 ?
                                    'descent reading' :
                                    book.pageCount < 100 ?
                                        'light Reading' : ''
                        }
                    </span> <br />
                    <span className={book.listPrice.amount > 150 ? 'red' : book.listPrice.amount < 20 ? 'green' : ''}>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</span> <br />
                </div>

                <LongTxt txt={book.description} />

                <input className="clear-filter btn" type="button" value="go back" onClick={goBack} />

            </div>
            <div className="book-img">
                {book.listPrice.isOnSale && <SaleSign />}
                <img className="book-img" src={book.thumbnail} />
            </div>
        </div >
    )
}