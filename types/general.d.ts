interface CoingeckoExchange {
  country: string;
  description: string;
  has_trading_incentive: boolean;
  id: string;
  image: string;
  name: string;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  trust_score: number;
  trust_score_rank: number;
  url: string;
  year_established: number;
}

export type {
  CoingeckoExchange
};
