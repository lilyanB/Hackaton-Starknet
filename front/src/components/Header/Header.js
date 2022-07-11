import { useNavigate } from 'react-router-dom'
import { header } from '../../constants'
import Navbar from '../Navbar/Navbar'
import './Header.css'


const Header = ({ account, setAccount }) => {

  const navigage = useNavigate();

  // async function connectWallet() {
  //   const starknet = await connect();
  //   if (starknet) {
  //     await starknet.enable();
  //   }
  //   if (starknet?.account?.address) {
  //     setAccount(starknet.account);
  //   }
  // }

  // async function disconnectWallet() {
  //   setAccount(undefined);
  // }

  const { title } = header
  return (
    <header className='header center'>
      <h3>
        <button type="button" className='link' onClick={() => {
          navigage(`/`)
        }}>{title}</button>
      </h3>
      <Navbar account={account} setAccount={setAccount} />
    </header>
  )
}

export default Header
