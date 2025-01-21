export function BookPreview({ title, imgUrl }) {
    return (
        <div className="preview">
            <img className='prev-img' src={imgUrl} />
            <span>{title}</span>
        </div>
    )
}