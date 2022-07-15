import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import { Routes, Route } from "react-router-dom"
import Exercices from 'components/Exercices/Exercices'
import Contact from 'components/Contact/Contact'

const Game = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <main>
            <Exercices />
            <Contact />
        </main>
    )
}

export default Game
