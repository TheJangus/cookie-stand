'use strict';

// to hold all shops object things
let allCookieShops = [];

// Array for business hours === data
const  operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//more variables array holders
let hourlyTotal = [];

//constructor function
function CookieShop(location, minHrCust, maxHrCust, customer, cookies, dailyTotal){
    this.location = location;
    this.minHrCust = minHrCust;
    this.maxHrCust = maxHrCust;
    this.customer = customer;
    this.cookies = cookies;
    this.dailyTotal = dailyTotal;
    this.avgCookiesPerCust = avgCookiesPerCust;
    allCookieShops.push(this);
}
//want to test
debugger;

CookieShop.prototype.custPerHour = function(){
    for(let i = 0; i < operatingHours.length; i++){
        return Math.floor(Math.random()*(this.maxHrCust - this.minHrCust + 1) + this.minHrCust);
    }
}

CookieShop.prototype.cookiesPerHr = function(){
    for(let i = 0; i < this.customer.length; i++){
        this.cookies[i] = Math.roundNum(this.customer[i] * this.avgCookiesPerCust);
        this.dailyTotal += this.cookies[i];
    }
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
function renderallcookieshops(){
    locationTotal.innerHTML = '';
    renderHeaders
    for(let i in allCookieShops){
        allCookieShops[i].render();
    }
};
//calls function to create arrays
new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);


//