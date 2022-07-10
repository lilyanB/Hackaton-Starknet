import { header } from '../../constants'
import Navbar from '../Navbar/Navbar'
import './Header.css'


const Header = ({ account, setAccount }) => {

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

  const { homepage, title } = header
  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar account={account} setAccount={setAccount} />
    </header>
  )
}

export default Header
