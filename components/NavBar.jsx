export function NavBar({ navigateTo }) {

    function onNavigate(event) {
        navigateTo(event.target.value)
    }

    return (
        <div className="nav-bar">
            <button value='home' onClick={(event) => onNavigate(event)}>home page</button>
            <button value='about' onClick={(event) => onNavigate(event)}>about</button>
            <button value='book' onClick={(event) => onNavigate(event)}>book index</button>
        </div>
    )
}