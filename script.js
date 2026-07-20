// ===========================================
// AI CRYPTO ANALYZER
// VERSION 2.0
// ===========================================

const API_URL =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

async function loadCrypto(){

try{

const response = await fetch(API_URL);

const data = await response.json();

const tbody=document.querySelector("#cryptoTable tbody");

tbody.innerHTML="";

data.forEach((coin,index)=>{

let score=Math.floor(Math.random()*25)+75;

let scoreClass="score-low";

if(score>=90){
scoreClass="score-high";
}
else if(score>=75){
scoreClass="score-medium";
}

let status="🟡 Hold";

if(score>=95){
status="🟢 Strong Buy";
}
else if(score>=85){
status="🟢 Buy";
}
else if(score>=70){
status="🟡 Hold";
}
else if(score>=50){
status="🟠 Sell";
}
else{
status="🔴 Strong Sell";
}

let trend="➡ Sideways";

if(coin.price_change_percentage_24h>5){
trend="🟢 Bullish";
}
else if(coin.price_change_percentage_24h<-5){
trend="🔴 Bearish";
}tbody.innerHTML += `

<tr>

<td>${index+1}</td>

<td>

<img src="${coin.image}" width="28" height="28">

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

<td>

$${(coin.market_cap/1000000000).toFixed(2)} B

</td>

<td>

${trend}

</td>

<td>

<span class="${scoreClass}">

${score}

</span>

</td>

<td>

${status}

</td>

<td>

<button onclick="showDetail('${coin.id}')">

Lihat

</button>

</td>

</tr>

`;

});
  function showDetail(id){

alert(
"Detail analisis untuk: " + id +
"\n\nFitur detail akan tersedia pada Versi 3.0"
);

}

document.getElementById("totalCoin").innerHTML=data.length;

document.getElementById("updateTime").innerHTML=
new Date().toLocaleTimeString("id-ID");

}catch(error){

console.log(error);

alert("Gagal mengambil data dari CoinGecko.");

}

}
document.addEventListener("DOMContentLoaded",()=>{

loadCrypto();

// Update setiap 1 jam
setInterval(loadCrypto,3600000);

// Tombol Refresh
const refreshBtn=document.getElementById("refreshBtn");

if(refreshBtn){

refreshBtn.addEventListener("click",()=>{

refreshBtn.innerHTML="Loading...";

loadCrypto();

setTimeout(()=>{

refreshBtn.innerHTML='<i class="fa-solid fa-rotate"></i> Refresh';

},1500);

});

}

});
// =====================================
// Utility Functions
// =====================================

function formatNumber(num){

if(num>=1000000000){
return (num/1000000000).toFixed(2)+" B";
}

if(num>=1000000){
return (num/1000000).toFixed(2)+" M";
}

if(num>=1000){
return (num/1000).toFixed(2)+" K";
}

return num.toString();

}

function getSignalColor(status){

if(status.includes("Strong Buy")) return "#0f9d58";

if(status.includes("Buy")) return "#34a853";

if(status.includes("Hold")) return "#fbbc04";

if(status.includes("Sell")) return "#ff6d
