// ====================================
// AI CRYPTO ANALYZER V1.1
// Real Time Data CoinGecko
// ====================================

const api =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

async function loadCrypto(){

try{

const response = await fetch(api);

const data = await response.json();

const tbody = document.querySelector("#cryptoTable tbody");

let trend="➡ Sideways";

if(coin.price_change_percentage_24h>5){
trend="🟢 Bullish";
}
else if(coin.price_change_percentage_24h<-5){
trend="🔴 Bearish";
}

<tr>

<td>${index+1}</td>

<td>

<img src="${coin.image}" width="28">

<b>${coin.symbol.toUpperCase()}</b>

</td>

<td>

$${coin.current_price.toLocaleString()}

</td>

<td style="color:${coin.price_change_percentage_24h>=0?'green':'red'}">

${coin.price_change_percentage_24h.toFixed(2)}%

</td>

<td>

$${(coin.total_volume/1000000).toFixed(2)} M

</td>

<td>$${(coin.market_cap/1000000000).toFixed(2)} B</td>

<td>${trend}</td>

<td>
<span class="${scoreClass}">
${score}
</span>
</td>

<td>${status}</td>

<td>
<button>Lihat</button>
</td>

</tr>

`;

});

document.getElementById("totalCoin").innerHTML=data.length;

document.getElementById("updateTime").innerHTML=new Date().toLocaleTimeString();

}catch(err){

console.log(err);

}

}

loadCrypto();

setInterval(loadCrypto,3600000);
