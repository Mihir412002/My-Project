//to get the what wil we do we first need to select this form from index.html file,to select this form we need id searchForm 

const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult'); 
var upd;//for id name you need to push # here
//now we need work on what happen if we need to submit addEventListener this function works when we submit
form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    if(upd){
        clearTimeout(upd);
    }
    //need to track the price of the this things we need apis from cryptotracker
    const ctype = form.elements.coinType.value;//the form wll be in some jason folder means some structure or database type so we need to extract so first we putt this form name and then elements
    //console.log(ctype);//is same as c++ cout instead of consiole lof function we can make fetch function
    fetchPrice(ctype);
    
    

});

//We need to get this thing when we just because of this link if PC in a browser what will get if you could sitting in our brother she will get something like this this contains everything is contained everything in some dictionary format it contains si koi name and the price is in which you want and the current price volume change and stamp got everything from speak modified for BTC us we got this thing and if you want for dog USD then it should come the right there should come so if you put off USD to get everything for the dog and us so we can get Just a first download axios documentation from GitHub just go to get Just copy and put HTML page just before
//when ever we fetch api we use sync function only because sync func are made for api works on some promises so it take time
const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    // console.log(r);
    //console.log(r.data.coin.price);
    const price = r.data.coin.price;
    const rnk = r.data.coin.rank;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const mcap = r.data.coin.marketCap;
    const base = r.data.coin.name;
    const target = 'INR';
    

    res.innerHTML = `<tr style = "color:#eec614">
    <td class = "bg-secondary bg-gradient"><b>Property</b></td>
    <td class = "bg-secondary bg-gradient"><b>Value</b></td>
    </tr>
    <tr style = "color:#eec614">
        <td>${base}</td>
        <td>${price} ${target}</td>
    </tr>
    <tr style = "color:#eec614">
        <td>Rank</td>
        <td>${rnk}</td>
    </tr> 
    <tr style = "color:#eec614">
        <td>Volume</td>
        <td>${volume}</td>
    </tr>
    <tr style = "color:#eec614">
        <td>Change</td>
        <td>${change}%</td>
    </tr>
    <tr style = "color:#eec614">
        <td>Market Cap</td>
        <td>${mcap}</td>
    </tr>`;

    upd = setTimeout(()=>fetchPrice(ctype), 10000);
}


//${ctype} that is a way to declare variable in string and here we fetched and r will contain everything
//whenever we fetch apis from axios we use this await these because we need to wait for apis to get fetche
