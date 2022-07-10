import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'

const Game = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <main>
            Game
        </main>
    )
}

export default Game
