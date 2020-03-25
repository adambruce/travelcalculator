// Travel Calculator JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function() {

  // use strict enforces more rules
  // rules make us better programmers
  "use strict";

  // === === === === === === === === === === === === ===
  // === === === ===   global variables  === === === ===
  // === === === ===      begin here     === === === ===
  // === === === === === === === === === === === === ===
  var miles = 500; // miles by car
  var travelers = 1; // # of travelers
  var mpg = 25; //mpg by card
  var ppg = 2.00; //current ppg
  var hotel = 199.99; //cost of Hotel
  var ticketprice = 300; //cost of airplane ticketprice
  var luggage = 50; //cost of luggage on airline


  // === === === === === === === === === === === === ===
  // === === === ===   global functions  === === === ===
  // === === === ===      begin here     === === === ===
  // === === === === === === === === === === === === ===

  function readCarValues() {
    miles = document.getElementById("miles").value;
  }

  function readCarValues() {
    mpg = document.getElementById("mpg").value;
  }

  function readCarValues() {
    ppg = document.getElementById("ppg").value;
  }

  function readCommonValues() {
    travelers = document.getElementById("travelers").value;
  }

  function readCommonValues() {
    hotel = document.getElementById("hotel").value;
  }

  function readAirValues() {
    ticketprice = document.getElementById("ticketprice").value;
  }

  function readAirValues() {
    luggage = document.getElementById("luggage").value;
  }


  function calculate() {

    // grab the values!

    readCarValues();
    readCommonValues();
    readAirValues();

    var output = "car miles: " + miles + "\n";
    output += "airplane ticket: $" + ticketprice;
    alert(output);
  }

  // this is how we output to the console log
  // useful for debugging your programs!
  console.log("-- travel-calculator.js starting --");

  // "click" event listeneer with anonymous function (WHAT!?!?)
  document.getElementById("calculate-button").addEventListener("click", calculate);
}());
