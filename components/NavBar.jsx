export function NavBar({ navigateTo }) {

    function onNavigate(event) {
        navigateTo(event.target.value)
    }

    return (
        <div className="nav-bar">
            <h1>Miss books</h1>
            <div className="links">
                <button className="link" value='home' onClick={(event) => onNavigate(event)}>home page</button>
                <button className="link" value='about' onClick={(event) => onNavigate(event)}>about</button>
                <button className="link" value='book' onClick={(event) => onNavigate(event)}>book index</button>
            </div>
        </div>
    )
}