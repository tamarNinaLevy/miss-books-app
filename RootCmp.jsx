import { HomePage } from "./components/HomePage.jsx";
import { About } from "./components/About.jsx";
import { BookIndex } from "./components/BookIndex.jsx";
import { NavBar } from "./components/NavBar.jsx";

const { useState } = React;

export function App() {

    const [page, setPage] = useState('book')

    function navigateTo(location) {
        setPage(location)
    }

    return (
        <section className="app">
            <NavBar navigateTo={navigateTo} />
            {page === 'home' && <HomePage />}
            {page === 'book' && <BookIndex />}
            {page === 'about' && <About />}
        </section>
    )
} 