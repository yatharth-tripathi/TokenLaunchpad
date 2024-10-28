import './App.css'
import { TokenLaunchpad } from './components/Tokenlauncpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

function App() {


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/cwxuo_Uqj12A5dtchRJqLnrocVGoFdeY"}>
      <WalletProvider wallets={[]} >
        <WalletModalProvider>

          

          <WalletMultiButton />
          <TokenLaunchpad></TokenLaunchpad>
          <WalletDisconnectButton />

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
