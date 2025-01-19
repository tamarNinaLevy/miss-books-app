import { NavBar } from "./components/NavBar.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { BookIndex } from "./components/BookIndex.jsx";
import { About } from "./components/About.jsx";

const { useState } = React;

export function App() {

    const [page, setPage] = useState('home')

    function navigateTo(location) {
        setPage(location)
    }

    return (
        <section className="app">
            <NavBar navigateTo={navigateTo} />
            <h1>Miss Books</h1>
            {page === 'home' && <HomePage />}
            {page === 'book' && <BookIndex />}
            {page === 'about' && <About />}
        </section>
    )
} 