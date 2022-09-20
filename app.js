'use strict';

// to hold all shops object things
let allShops = [];

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

//calls function to create arrays
new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

function renderallcookieshops(){
    for(let i in allCookieShops){
        allCookieShops[i].render();
    }
}













const seattle = {
    name: 'Seattle',
    minHrCust: 23,
    maxHrCust: 65,
    customer: [],
    cookies: [],
    dailyTotal: 0,
    avgCookiesPerCust: 6.3,

    //helper functions
    
    custPerHour: function(){
        for(let i = 0; i < operatingHours.length; i++) {
            let custHr = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(custHr);
        }
        console.log(this.custPerHour);
    },
    cookiesPerHr: function() {
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.avgCookiesPerCust;
            let roundCHrTotal = Math.round(hourlyTotal);
            this.dailyTotal += roundCHrTotal;
            this.cookies.push(roundCHrTotal);
        }
    },
    displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${operatingHours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `${this.name} Total: ${this.dailyTotal} cookies`;
    },
}
seattle.displayCookies();
console.log(seattle);

const tokyo = {
    name: 'Tokyo',
    minHrCust: 3,
    maxHrCust: 24,
    customer: [],
    cookies: [],
    dailyTotal: 0,
    avgCookiesPerCust: 1.2,

    //helper functions
    
    custPerHour: function(){
        for(let i = 0; i < operatingHours.length; i++) {
            let custHr = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(custHr);
        }
        console.log(this.custPerHour);
    },
    cookiesPerHr: function() {
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.avgCookiesPerCust;
            let roundCHrTotal = Math.round(hourlyTotal);
            this.dailyTotal += roundCHrTotal;
            this.cookies.push(roundCHrTotal);
        }
    },
    displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${operatingHours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `${this.name} Total: ${this.dailyTotal} cookies`;
    },
}
tokyo.displayCookies();
console.log(tokyo);

const dubai = {
    name: 'Dubai',
    minHrCust: 11,
    maxHrCust: 38,
    customer: [],
    cookies: [],
    dailyTotal: 0,
    avgCookiesPerCust: 3.7,

    //helper functions
    
    custPerHour: function(){
        for(let i = 0; i < operatingHours.length; i++) {
            let custHr = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(custHr);
        }
        console.log(this.custPerHour);
    },
    cookiesPerHr: function() {
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.avgCookiesPerCust;
            let roundCHrTotal = Math.round(hourlyTotal);
            this.dailyTotal += roundCHrTotal;
            this.cookies.push(roundCHrTotal);
        }
    },
    displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${operatingHours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `${this.name} Total: ${this.dailyTotal} cookies`;
    },
}
dubai.displayCookies();
console.log(dubai);

const paris = {
    name: 'Paris',
    minHrCust: 20,
    maxHrCust: 38,
    customer: [],
    cookies: [],
    dailyTotal: 0,
    avgCookiesPerCust: 2.3,

    //helper functions
    
    custPerHour: function(){
        for(let i = 0; i < operatingHours.length; i++) {
            let custHr = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(custHr);
        }
        console.log(this.custPerHour);
    },
    cookiesPerHr: function() {
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.avgCookiesPerCust;
            let roundCHrTotal = Math.round(hourlyTotal);
            this.dailyTotal += roundCHrTotal;
            this.cookies.push(roundCHrTotal);
        }
    },
    displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${operatingHours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `${this.name} Total: ${this.dailyTotal} cookies`;
    },
}
paris.displayCookies();
console.log(paris);

const lima = {
    name: 'Lima',
    minHrCust: 2,
    maxHrCust: 16,
    customer: [],
    cookies: [],
    dailyTotal: 0,
    avgCookiesPerCust: 4.6,

    //helper functions
    
    custPerHour: function(){
        for(let i = 0; i < operatingHours.length; i++) {
            let custHr = randomCount(this.minHrCust, this.maxHrCust);
            this.customer.push(custHr);
        }
        console.log(this.custPerHour);
    },
    cookiesPerHr: function() {
        this.custPerHour();
        for(let i = 0; i < this.customer.length; i++){
            let hourlyTotal = this.customer[i] * this.avgCookiesPerCust;
            let roundCHrTotal = Math.round(hourlyTotal);
            this.dailyTotal += roundCHrTotal;
            this.cookies.push(roundCHrTotal);
        }
    },
    displayCookies: function(){
        this.cookiesPerHr();
        let section = document.getElementById('results');
        let heading = document.createElement('h2');
        heading.textContent = this.name;
        section.appendChild(heading);
        let list = document.createElement('ul');
        section.appendChild(list);
        for(let i = 0; i < this.customer.length; i++){
            let listItem = document.createElement('li');
            listItem.textContent = `${operatingHours[i]}: ${this.cookies[i]} cookies`;
            list.appendChild(listItem);
        }
        let totalListItem = document.createElement('li');
        list.appendChild(totalListItem);
        totalListItem.textContent = `${this.name} Total: ${this.dailyTotal} cookies`;
    },
}
lima.displayCookies();
console.log(lima);

 function randomCount (min, max){
   return Math.floor(Math.random()*(max- min +1)+min)
 }


 //kitten.prototype.getAge = function (){
    //this.age = randomAge(3, 12);
 //},
 //

 // *** create our objects using our contructor***
 // new Kitten('Frankie',['wet food', 'toy mice', 'catnip'], true, true, true, 'img/frankie.jpeg');
 //console.log(kittenCaboodle);
 //kittenCaboodle[0], 

 //*****table dom rendering****/
 //let tableElem = document.createElement('table');
 //articleElem.appendChild(tableElem);
 //
 //tr would be your ul////////

 //let row1 = document.createElement('tr');
 //tableElem.appendChild(row1);

 //// create content (td or TH) for our table row / think of these as li ///
 //let th1Elem = document.createElement('th');
 //th1Elem.textContent = 'Good with Cats';
 //row1.appendChild(th1Elem);

 //let row2 = document.createElement('tr');
 //tableElem.appendChild(row2);

 //let td1Elem = document.createElement('td');
 //td1Elem.textContent = this.isGoodWithCats;
 //row2.appendChild(td1Elem);

 /// select word = ctrl + D(for as many words) === to change variables