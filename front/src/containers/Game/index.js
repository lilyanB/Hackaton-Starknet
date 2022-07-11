import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import { Routes, Route } from "react-router-dom"
import Exercices from 'components/Exercices/Exercices'
import Contact from 'components/Contact/Contact'

const Game = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <Routes>
            <Route path="/" element={
                <main>
                    <Exercices />
                    <Contact />
                </main>
            } />
        </Routes>
    )
}

export default Game
