const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { HomePage } from "./components/HomePage.jsx";
import { About } from "./components/About.jsx";
import { BookIndex } from "./components/BookIndex.jsx";
import { NavBar } from "./components/NavBar.jsx";

export function App() {

    const [page, setPage] = useState('book')

    function navigateTo(location) {
        setPage(location)
    }

    return (
        <Router>
            <section className="app">
                <NavBar navigateTo={navigateTo} />
                {page === 'home' && <HomePage />}
                {page === 'book' && <BookIndex />}
                {page === 'about' && <About />}
            </section>
        </Router>
    )
} 