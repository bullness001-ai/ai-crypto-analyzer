// ======================================
// TRADINGVIEW
// VERSION 1.0
// ======================================

function loadTradingView(symbol = "BINANCE:BTCUSDT") {

    const chart = document.getElementById("tradingview_chart");

    if (!chart) return;

    chart.innerHTML = "";

    new TradingView.widget({

        autosize: true,

        symbol: symbol,

        interval: "60",

        timezone: "Asia/Jakarta",

        theme: "light",

        style: "1",

        locale: "id",

        hide_top_toolbar: false,

        hide_side_toolbar: false,

        allow_symbol_change: true,

        container_id: "tradingview_chart"

    });

}
