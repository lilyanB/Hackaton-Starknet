import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import Header from 'components/Header/Header'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import Footer from 'components/Footer/Footer'

const App = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <main>
            Game
        </main>
    )
}

export default App
