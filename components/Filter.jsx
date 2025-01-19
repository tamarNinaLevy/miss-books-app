const { useState, useEffect } = React

export function Filter({ setFilterBy, filterBy }) {

    const options = ['All', 'name', 'price']

    const [selectedOpt, setSelectedOpt] = useState('All')
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setFilterBy((prev) => {
            return { ...prev, order: checked ? -1 : 1 }
        })
    }, [checked])

    function onChangeSelect(ev) {
        const key = ev.target.value
        setSelectedOpt(key)
        const filter = { order: checked ? -1 : 1 }
        filter[key] = key === 'All' ? true : ''
        setFilterBy(filter)
    }

    function onInputChange(ev) {
        setFilterBy((prev) => {
            const copyFilter = { ...prev }
            copyFilter[selectedOpt] = ev.target.value
            return { ...copyFilter }
        })
    }

    function onChangeOrder() {
        setChecked(!checked)
    }

    function clear() {
        setSelectedOpt('All')
        setChecked(false)
        setFilterBy({ all: true, order: 1 })
    }

    return <div className="filter-container">
        <select onChange={(ev) => onChangeSelect(ev)}>
            {
                options.map((opt) => {
                    return <option key={opt} value={opt}>{opt}</option>
                })
            }
        </select>
        <div className="filter-order">
            <input checked={checked} type="checkbox" name="descending" id="descending" onChange={onChangeOrder} />
            <label>Descending order</label>
        </div>
        <input type="text" onInput={onInputChange} />
        <label>Min Price: {filterBy.price || 0}</label>
        <input type="range" defaultValue={0} min={0} max={200} onChange={onInputChange} />
        <input type="button" value="clear" onClick={clear} />
    </div>
}