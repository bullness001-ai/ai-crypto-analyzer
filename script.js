// ==========================================
// AI CRYPTO ANALYZER
// VERSION 1.0
// ==========================================

const API_URL =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

async function loadCrypto(){

try{

const response = await fetch(API_URL);

const coins = await response.json();

const tbody = document.querySelector("#cryptoTable tbody");

tbody.innerHTML="";

coins.sort((a,b)=>b.market_cap-a.market_cap);

coins.forEach((coin,index)=>{

let score=50;

// ===== Harga 24 Jam =====

const change=coin.price_change_percentage_24h||0;

if(change>10){
score+=30;
}
else if(change>5){
score+=20;
}
else if(change>2){
score+=10;
}

// ===== Market Cap =====

if(index<10){
score+=20;
}
else if(index<25){
score+=10;
}

// ===== Volume =====

if(coin.total_volume>1000000000){
score+=10;
}

if(score>100){
score=100;
}

// ===== Trend =====

let trend="➡ Sideways";

if(change>5){
trend="🟢 Bullish";
}
else if(change<-5){
trend="🔴 Bearish";
}

// ===== Signal =====

let signal="🔴 Strong Sell";

if(score>=90){
signal="🟢 Strong Buy";
}
else if(score>=80){
signal="🟢 Buy";
}
else if(score>=65){
signal="🟡 Hold";
}
else if(score>=50){
signal="🟠 Sell";
}
// ===== Warna Perubahan Harga =====

const changeColor = change >= 0 ? "#16a34a" : "#dc2626";

tbody.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>
<img src="${coin.image}" width="24" height="24">
<b>${coin.symbol.toUpperCase()}</b>
</td>

<td>
$${coin.current_price.toLocaleString()}
</td>

<td style="color:${changeColor};font-weight:bold;">
${change.toFixed(2)}%
</td>

<td>
$${(coin.market_cap/1000000000).toFixed(2)} B
</td>

<td>
$${(coin.total_volume/1000000).toFixed(2)} M
</td>

<td>
${trend}
</td>

<td>

<div style="
background:#1565C0;
color:white;
padding:5px;
border-radius:8px;
text-align:center;
font-weight:bold;
">

${score}

</div>

</td>

<td>

<span style="font-weight:bold;">

${signal}

</span>

</td>

<td>

<button onclick="detailCoin('${coin.id}')">

Detail

</button>

</td>

</tr>

`;

});
// ==========================================
// Fungsi Detail
// ==========================================

function detailCoin(id){

alert(
"Coin : " + id +
"\n\nFitur detail akan ditambahkan pada versi berikutnya."
);

}

// ==========================================
// Update Waktu
// ==========================================

function updateTime(){

const now=new Date();

const jam=now.toLocaleTimeString("id-ID");

const el=document.getElementById("updateTime");

if(el){
el.innerHTML=jam;
}

}

// ==========================================
// Tombol Refresh
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

loadCrypto();

updateTime();

setInterval(updateTime,1000);

// Update data setiap 1 jam
setInterval(loadCrypto,3600000);

const refresh=document.getElementById("refreshBtn");

if(refresh){

refresh.addEventListener("click",()=>{

refresh.innerHTML="Loading...";

loadCrypto();

setTimeout(()=>{

refresh.innerHTML="🔄 Refresh";

},1500);

});

}

});

}catch(error){

console.error(error);

alert("Gagal mengambil data CoinGecko.");

}

  }
