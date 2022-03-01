import { Currency, ETHER, Token } from '@subswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return ETHER?.symbol || 'CRAB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
