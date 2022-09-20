'use strict';

// Array for business hours === data
let operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


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
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
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
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
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
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
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
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
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
        totalListItem.textContent = `Total: ${this.dailyTotal} cookies`;
    },
}
lima.displayCookies();
console.log(lima);

 function randomCount (min, max){
   return Math.floor(Math.random()*(max- min +1)+min)
 }
