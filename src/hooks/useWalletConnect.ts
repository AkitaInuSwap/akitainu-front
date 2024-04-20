// Config
import { WALLET_TYPES } from '@/config/wallets'
// Crossmark
import crossmark from '@crossmarkio/sdk'
// Gem Wallet
import gem from '@gemwallet/api'

const useWalletConnect = () => {
  const connect = async (type: WALLET_TYPES) => {
    switch (type) {
      case WALLET_TYPES.CROSSMARK:
        const { response } = await crossmark.methods.signInAndWait()

        if (response.data.meta.isRejected) {
          return
        }

        const address = response.data.address
        const network = response.data.network

        // TODO: Session

        break
      case WALLET_TYPES.GEM_WALLET:
        // TODO: Gem Wallet
        console.log('Connect Gem Wallet')
        break
      case WALLET_TYPES.XUMM:
        console.log('Connect XUMM')
        break
      default:
        throw new Error(`Invalid wallet type: ${type}`)
    }
  }

  return {
    connect,
  }
}

export default useWalletConnect
