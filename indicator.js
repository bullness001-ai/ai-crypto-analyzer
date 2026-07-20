// ======================================
// TECHNICAL INDICATORS
// VERSION 1.0
// ======================================

// Menghitung EMA (Exponential Moving Average)
function calculateEMA(prices, period) {

    const k = 2 / (period + 1);

    let ema = [prices[0]];

    for (let i = 1; i < prices.length; i++) {
        ema.push(
            prices[i] * k + ema[i - 1] * (1 - k)
        );
    }

    return ema;
}

// Menghitung RSI
function calculateRSI(prices, period = 14) {

    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {

        let change = prices[i] - prices[i - 1];

        if (change > 0) {
            gains += change;
        } else {
            losses += Math.abs(change);
        }

    }

    let rs = gains / losses;

    return 100 - (100 / (1 + rs));

}
