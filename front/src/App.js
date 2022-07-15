import { useContext, useState } from 'react'
import { Routes, Route } from "react-router-dom"

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
  const [account, setAccount] = useState(undefined);

  return (
    <div id='top' className={`${themeName} app md:px-0 px-4`}>
      <Header account={account} setAccount={setAccount} />

      <Routes>
        <Route path="/" element={
          <main>
            <About />
            <Exercices />
            <Contact />
          </main>
        } />
        <Route path="/game/starknet" element={<Game account={account} />} />
        <Route path="/game/starknet/:gameId" element={<GameId account={account} />} />
      </Routes>



      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
