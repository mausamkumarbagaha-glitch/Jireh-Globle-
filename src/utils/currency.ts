import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/company';

export function formatPrice(amountInUSD: number, currency: Currency): string {
  const rateInfo = CURRENCY_RATES[currency];
  const converted = amountInUSD * rateInfo.rate;
  
  if (currency === 'INR') {
    return `${rateInfo.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }
  
  return `${rateInfo.symbol}${converted.toFixed(2)}`;
}

export function convertUSD(amountInUSD: number, currency: Currency): number {
  return amountInUSD * CURRENCY_RATES[currency].rate;
}
