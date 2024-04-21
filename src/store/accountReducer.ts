export type Account = {
  address: string | null
}

export type AccountReducerAction = {
  type: 'SET_ACCOUNT'
  payload?: Account
}

export const accountInitialState = {
  address: null,
}

export const accountReducer = (
  state: Account,
  action: AccountReducerAction
): Account => {
  switch (action.type) {
    case 'SET_ACCOUNT': {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}
