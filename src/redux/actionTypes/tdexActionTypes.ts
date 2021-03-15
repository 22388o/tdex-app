import { TradeType } from 'tdex-sdk';
export interface TDEXProvider {
  id?: number;
  name: string;
  endpoint: string;
}

export interface TDEXMarket {
  baseAsset: string;
  quoteAsset: string;
  provider: TDEXProvider;
}

export interface TDEXTrade {
  market: TDEXMarket;
  type: TradeType;
}