// ======================================
// API SERVICE
// CoinGecko
// Binance
// ======================================

async function getTopCoins(){

const url =
`${CONFIG.COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${CONFIG.MAX_COINS}&page=1&sparkline=false`;

const response = await fetch(url);

return await response.json();

}

async function getBinanceKlines(symbol="BTCUSDT",interval="1h",limit=200){

const url =
`${CONFIG.BINANCE_API}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;

const response = await fetch(url);

return await response.json();

}
