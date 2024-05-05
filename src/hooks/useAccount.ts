import { useContext, useEffect } from 'react'
import { AccountContext } from '@/providers/AccountContextProvider'

const useAccount = () => {
  const accountContext = useContext(AccountContext)

  if (!accountContext) {
    throw new Error('useAccount must be used within an AccountProvider')
  }

  const [account] = accountContext

  const fetchTokenBalances = async () => {
    try {
      //
    } catch (error: unknown) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (account.address) {
      console.log('Account address:', account.address)
    }
  }, [account])

  return {
    address: account.address,
  }
}

export default useAccount
