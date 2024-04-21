import { createContext, useReducer } from 'react'
import { accountReducer, accountInitialState } from '@/store/accountReducer'
import type { Dispatch, ReactNode } from 'react'
import type { Account, AccountReducerAction } from '@/types'

interface AccountProviderProps {
  children: ReactNode
}

export const AccountContext = createContext<
  [Account, Dispatch<AccountReducerAction>] | undefined
>(undefined)

export const AccountContextProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const [account, dispatch] = useReducer(accountReducer, accountInitialState)

  return (
    <AccountContext.Provider value={[account, dispatch]}>
      {children}
    </AccountContext.Provider>
  )
}
