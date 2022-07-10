import { useContext, useState } from 'react'
import { connect } from "@argent/get-starknet"
// import Brightness2Icon from '@mui/icons-material/Brightness2'
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { exercices, contact } from '../../constants'
import ellipse from '../../utils'
import './Navbar.css'

const Navbar = ({ account, setAccount }) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  async function connectWallet() {
    const starknet = await connect();
    if (starknet) {
      await starknet.enable();
    }
    if (starknet?.account?.address) {
      setAccount(starknet.account);
    }
  }

  async function disconnectWallet() {
    setAccount(undefined);
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {exercices.length ? (
          <li className='nav__list-item'>
            <a
              href='#exercices'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Exercices
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {/* {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {/* {showNavList ? <CloseIcon /> : <MenuIcon />} */}
      </button>
      <button type="button" onClick={account?.address ? disconnectWallet : connectWallet} variant="outlined"
        // className={`${account?.address ? ''}`}
        className='rounded p-2'
        style={{ border: '2px solid var(--clr-fg)' }}
      >
        {ellipse(account?.address) || 'Connect Wallet'}
      </button>
    </nav>
  )
}

export default Navbar
