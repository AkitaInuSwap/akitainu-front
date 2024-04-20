export enum WALLET_TYPES {
  CROSSMARK = 'crossmark',
  GEM_WALLET = 'gem-wallet',
  XUMM = 'xumm',
}

export const WALLETS = {
  CROSSMARK: {
    name: 'Crossmark',
    type: WALLET_TYPES.CROSSMARK,
    isActive: true,
  },
  GEM_WALLET: {
    name: 'Gem Wallet (soon)',
    type: WALLET_TYPES.GEM_WALLET,
    isActive: false,
  },
  XUMM: {
    name: 'XUMM (soon)',
    type: WALLET_TYPES.XUMM,
    isActive: false,
  },
}
