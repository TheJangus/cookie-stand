'use strict';

// to hold all shops object things
let allCookieShops = [];
//get cookie sold to table
let locationTable = document.getElementById('locationSales');
//let cookieCafeSales = document.createElement("table");
//cookieCafeSales.appendChild(tableElem);

// Array for business hours === data
const  operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//more variables array holders
let hourlyTotal = [];


//want to test
//debugger;

//calls function to create arrays
new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

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
        //this.cookies.push = Math.roundNum(this.customer[i] * this.cookiesPerSale); ---because [] is zero already
        this.cookies[i] = Math.roundNum(this.customer[i] * this.cookiesPerSale);
        this.dailyTotal += this.cookies[i];
    }
}

CookieShop.prototype.render = function(){
    //tr is ul
    let trElem = document.createElement('tr');
    tableElem.appendchild(trElem);  // add this line in
    let tdElem = document.createElement('td');
    tdElem.textContent = this.location; //changed from th to td --<td>this.location</td>
    trElem.appendChild(tdElem);

    for (let i = 0; i < operatingHours.length; i++){
        let tdElem = document.createElement("td");   //// completelley changed this
        trElem.textContent = this.cookies[i];
        trElem.appendChild(trElem);
    }
    tdElem = document.createElement('td');
    tdElem.textContent = this.dailyTotal;
    trElem.appendChild(tdElem);
};


/////header///
///render the table -- then the header --- then the content --- made an commit here
function createHeaders(){        ///changed from render to create
    let trE1 = document.createElement('tr');
    let thE1 = document.createElement('th');
    thE1.textContent = 'Location';
    trE1.appendChild(thE1);

    for (let i = 0; i < operatingHours.length; i++){
        thE1 = document.createElement('th');
        thE1.textContent = operatingHours[i];
        trE1.appendChild(thE1);
    };
    let thE2 = document.createElement('th');
    thE2.textContent = 'Total'; ///updated to thE2
    trE2.appendChild(thE1);
    locationTable.appendChild(trE1);
}

/// -----------
function createFooter()[
    let trElem = document.createElement("tr");
    let td1 = document.createElement("td");
    HTMLTableRowElement.textContent
]

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

createHeaders();   /// added


//---------------- new below


allCookieShops[0].custPerHour();
allCookieShops[1].custPerHour();
allCookieShops[2].custPerHour();
allCookieShops[3].custPerHour();
allCookieShops[4].custPerHour();

allCookieShops[0]cookiesPerHr();
allCookieShops[1]cookiesPerHr();
allCookieShops[2]cookiesPerHr();
allCookieShops[3]cookiesPerHr();
allCookieShops[4]cookiesPerHr();

allCookieShops[0].render();
allCookieShops[1].render();
allCookieShops[2].render();
allCookieShops[3].render();
allCookieShops[4].render();

createFooter();



//CookieShop.prototype.render = function(){
//    let trElem = document.createElement('tr');
 //   let tdElem = document.createElement('td');
///    thElem.textContent = this.location;
 //   trElem.appendChild(tdElem);

   // for (let i = 0; i < operatingHours.length; i++);
 //   tdElem = document.createElement('td');
  //  tdElem.textContent = this.dailyTotal;
  //  trElem.appendChild(tdElem);
 //   locationTable.appendChild(trElem);
//};

//function renderAllCookieShops(){
//    locationTotal.innerHTML = '';
//    renderHeaders
 //   for(let i in allCookieShops){
 //       allCookieShops[i].render();
////    }
//};



//