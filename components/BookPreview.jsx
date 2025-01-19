export function BookPreview({ title, imgUrl, id, onSelectBook }) {

    return (
        <div className="preview">
            <img src={imgUrl} />
            <span>{title}</span>
            <input type="button" value="details" id={id} onClick={() => onSelectBook(id)} />
        </div>
    )
}