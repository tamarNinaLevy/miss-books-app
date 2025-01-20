const { useState } = React

export function LongTxt({ txt }) {

    const [showAll, setShowAll] = useState(false)

    function onDisplayMoreText() {
        setShowAll(!showAll)
    }

    return <div className="text">
        <p>
            {
                txt.length > 100 ?
                    showAll ? txt : txt.substring(0, 100) + '...' : txt
            }
        </p>
        {txt.length > 100 && <input type="button" value={showAll ? 'Hide' : 'Read more'} onClick={onDisplayMoreText} />}
    </div>
}