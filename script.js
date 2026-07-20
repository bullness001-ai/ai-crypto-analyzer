// ================================
// AI CRYPTO ANALYZER V1.0
// ================================

const cryptoData = [

{
rank:1,
coin:"BTC",
price:"Loading...",
score:96,
probability:"91%",
prediction:"+3.2%",
status:"🟢 Strong Buy"
},

{
rank:2,
coin:"ETH",
price:"Loading...",
score:93,
probability:"88%",
prediction:"+2.4%",
status:"🟢 Buy"
},

{
rank:3,
coin:"SOL",
price:"Loading...",
score:91,
probability:"86%",
prediction:"+2.0%",
status:"🟢 Buy"
},

{
rank:4,
coin:"BNB",
price:"Loading...",
score:89,
probability:"82%",
prediction:"+1.8%",
status:"🟢 Buy"
},

{
rank:5,
coin:"XRP",
price:"Loading...",
score:85,
probability:"80%",
prediction:"+1.4%",
status:"🟢 Buy"
}

];

function loadTable(){

const tbody=document.querySelector("#cryptoTable tbody");

tbody.innerHTML="";

cryptoData.forEach(c=>{

tbody.innerHTML+=`

<tr>

<td>${c.rank}</td>

<td>${c.coin}</td>

<td>${c.price}</td>

<td>

<span class="score">

${c.score}

</span>

</td>

<td>${c.probability}</td>

<td>${c.prediction}</td>

<td>${c.status}</td>

<td>

<button>

Detail

</button>

</td>

</tr>

`;

});

}

function updateClock(){

const now=new Date();

document.getElementById("updateTime").innerHTML=

now.toLocaleTimeString("id-ID");

}

document.addEventListener("DOMContentLoaded",()=>{

loadTable();

updateClock();

setInterval(updateClock,1000);

});

document.getElementById("refreshBtn").addEventListener("click",()=>{

loadTable();

});
