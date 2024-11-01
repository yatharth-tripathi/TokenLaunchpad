import './App.css'
import { TokenLaunchpad } from './components/Tokenlauncpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {


  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} >
        <WalletModalProvider>

          
        <div >
          <WalletMultiButton />
          
          <WalletDisconnectButton />
          </div>
          <TokenLaunchpad></TokenLaunchpad>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
