import { useContext } from 'react'
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from './contexts/theme'
import Game from './containers/Game'
import GameId from './containers/GameId'
import Header from './components/Header/Header'
import About from './components/About/About'
import Exercices from './components/Exercices/Exercices'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <Routes>
        <Route path="/" element={
          <main>
            <About />
            <Exercices />
            <Contact />
          </main>
        } />
        <Route path="/game/starknet" element={<Game />} />
        <Route path="/game/starknet/:gameId" element={<GameId />} />
      </Routes>



      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
