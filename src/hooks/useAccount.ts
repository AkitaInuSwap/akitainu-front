import { useContext } from 'react'
import { AccountContext } from '@/providers/AccountContextProvider'

const useAccount = () => {
  const accountContext = useContext(AccountContext)

  if (!accountContext) {
    throw new Error('useAccount must be used within an AccountProvider')
  }

  const [account] = accountContext

  return {
    address: account.address,
  }
}

export default useAccount
