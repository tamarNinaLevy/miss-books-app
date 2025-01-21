const { useState, useEffect } = React

export function Filter({ setFilterBy, filterBy }) {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [author, setAuthor] = useState('')
    const [publishedDate, setPublishedDate] = useState('')

    useEffect(() => {
        setTitle(filterBy.title)
        setPrice(filterBy.price)
        setAuthor(filterBy.author)
        setPublishedDate(filterBy.publishedDate)
    }, [filterBy])

    function onInputChange(ev) {
        const key = ev.target.name
        const value = ev.target.value
        setFilterBy((prev) => {
            const copyFilter = { ...prev }
            copyFilter[key] = value
            return { ...copyFilter }
        })
    }

    function clear() {
        setFilterBy({ title: '', price: '', author: '', publishedDate: '' })
    }

    return <div className="filter-container">
        <input type='text' className="filter-input" value={title} name='title' placeholder='Enter title name...' onInput={onInputChange} />
        <input type='text' className="filter-input" value={price} name='price' placeholder='Enter price...' onInput={onInputChange} />
        <input type='text' className="filter-input" value={author} name='author' placeholder='Enter author name...' onInput={onInputChange} />
        <input type='text' className="filter-input" value={publishedDate} name='publishedDate' placeholder='Enter published date...' onInput={onInputChange} />
        <input type='button' className="clear-filter" value='clear filters' onClick={() => clear()} />
    </div>
}