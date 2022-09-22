'use strict';

// to hold all shops object things
let allCookieShops = [];
//get cookie sold to table
let locationTable = document.getElementById('locationSales');
//to add shop to form
let cookieShopForm = document.getElementById('add-shop-form');
//let cookieCafeSales = document.createElement("table");
//cookieCafeSales.appendChild(tableElem);

// Array for business hours === data
const  operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//more variables array holders
let hourlyTotal = [];

//constructor function
function CookieShop(location, minHrCust, maxHrCust, cookiesPerSale){
    this.location = location;
    this.minHrCust = minHrCust;
    this.maxHrCust = maxHrCust;
    this.cookiesPerSale = cookiesPerSale;
    this.dailyTotal = 0;
    this.cookies = []
    this.customer = [];
    this.cookiesPerHr = [];
    allCookieShops.push(this);
}
//want to test
//debugger;

CookieShop.prototype.custPerHour = function(){
    for(let i = 0; i < operatingHours.length; i++){
        //add this line, took out return in front of math.floor
        this.customer.push(
         Math.floor(Math.random()*(this.maxHrCust - this.minHrCust + 1) + this.minHrCust);
        )
    }
}

CookieShop.prototype.cookiesPerHr = function(){
    for(let i = 0; i < this.customer.length; i++){
        this.cookies[i] = Math.roundNum(this.customer[i] * this.cookiesPerSale);
        this.dailyTotal += this.cookies[i];
    }
}{
CookieShop.prototype.dailyTotal = function(){
    this.dailyTotal = this.cookies.reduce(function (a,b)}{
        return a + b;
    };
}

///render the table -- then the header --- then the content --- made an commit here
function renderHeaders(){
    let trE1 = document.createElement('tr');
    let thE1 = document.createElement('th');
    thE1.textContent = 'Location';
    trE1.appendChild(thE1);
    for (let i = 0; i < operatingHours.length; i++){
        thE1 = document.createElement('th');
        thE1.textContent = operatingHours[i];
        trE1.appendChild(thE1);
    };
    thE1 = document.createElement('th');
    thE1.textContent = 'Total';
    trE1.appendChild(thE1);
    locationTable.appendChild(trE1);
}

CookieShop.prototype.render = function(){
    let trElem = document.createElement('tr');
    let tdElem = document.createElement('td');
    thElem.textContent = this.location;
    trElem.appendChild(tdElem);
    
    for (let i = 0; i < operatingHours.length; i++);
    tdElem = document.createElement('td');
    tdElem.textContent = this.dailyTotal;
    trElem.appendChild(tdElem);
    locationTable.appendChild(trElem);
};
//calls function to create arrays
new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

function renderAll(){
    locationsales.innerHTML = '';
    renderHeaders
    for(let i in allCookieShops){
        allCookieShops[i].render();
    }
};

renderAllCookieShops();

console.log(locations);

//-------footlong
function createFooter(){
    let trFoot = document.createElement("tfoot");
    let trElem = document.createElement("tr");
    let tdElem = document.createElement("td");
    tdElem.textContent = "Hourly Totals";
    trFoot.appendChild(trElem);
    trElem.appendChild(tdElem);
    tableElem.appendChild(trFoot);
    
    let grandTotal = 0;

    for (let i = 0; i < operatingHours.length; i++){
        let tdElem = document.createElement("td");
        let hourlyTotal = 0;

        for (let j = 0; j < allCookieShops.length; j++){
            hourlyTotal += allCookieShops[j].hourlyTotal[i];
            grandTotal += allCookieShops[j].hourlyTotal[i];
        }
        let td2Elem=document.createElement("td");
        trElem.appendChild(td2Elem);
        td2Elem.textContent = grandTotal;
    }
}


//to add a new shop
function addNewCookieStore(event){
     //stop default behavior
    event.preventDefault();
  //console.log(event);
 // console.log(event.target);
 // console.log(event.target.shopLocation);
  
  // Get target of event 
  (event.target.shopLocation.value);

  let newShopName = event.target.name.value;
  let addMinCustomers = parseInt(event.target.minCustomers.value);
  let addMaxCustomers = parseInt(event.target.maxCustomers.value);
  let cookiesPerSale = parseInt(event.target.cookiesPerSale.value);

  if(!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.cookiesPerSale.value){
    return alert('Oops, I tend to forget things too! Please fill out all blocks and try again!');
  }
  if(event.target.minCustomers.value < 0 || event.target.maxCustomers.value < 0 || event.target.cookiesPerSale.value < 0){
    return alert ('Just how does one have negative customers? And free cookies, we would go out of business!');
  }
  if (event.target.minCustomers.value > event.target.maxCustomers.value) {
    return alert('Me thinks you got those numbers backwards');
  }

for(let i=0; i < allCookieShops.length; i++){
    if (newShopName == allCookieShops[i].location){
        allCookieShops[i].minCustomers = addMinCustomers;
        allCookieShops[i].maxCustomers = addMaxCustomers;
        allCookieShops[i].cookiesPerSale = addCookiesPerSale;
        renderAll();
        return;
    }else {
        event.target.name.value = null;
        event.target.minCustomers.value = null;
        event.target.maxCustomers.value = null;
        event.target.cookiesPerSale.value = null;
        new CookieShop(newShopName, addMinCustomers, addMaxCustomers, addCookiesPerSale);
        renderAll();
        return;
    }
}

//Event Listener
shopForm.addEventListener('submit',addNewShop);

  
cookieShopForm.reset();