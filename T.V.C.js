'use strict';

// Get saved money, or use 0 if nothing is saved
let MoneyDisplay = Number(localStorage.getItem('MoneyDisplay')) || 0;

// Show it on the page
document.getElementById('MoneyDisplay').textContent = MoneyDisplay;

function getmoney() {
    MoneyDisplay++;
     // Save the new value
    localStorage.setItem('MoneyDisplay', MoneyDisplay);

    // Update the display
    document.getElementById('MoneyDisplay').textContent = MoneyDisplay;
} 

  function submoney() {
    document.getElementById("MoneyDisplay").textContent = MoneyDisplay;
    if (MoneyDisplay >= 5) {
      MoneyDisplay-= 5;
      changeColor('red')
      // Save the new value
      localStorage.setItem('MoneyDisplay', MoneyDisplay);

    // Update the display
    document.getElementById('MoneyDisplay').textContent = MoneyDisplay;
  }}


  let color =localStorage.getItem('color') || 'black';
  document.getElementById('header').style.color = color;

  function changeColor(newColor) {
    color = newColor;
    document.getElementById('header').style.color = color;
    localStorage.setItem('color', color);
  }
 




  function submoneyforper() {
    document.getElementById("MoneyDisplay").textContent = MoneyDisplay;
    if (MoneyDisplay >= 10) {
      MoneyDisplay-= 10;
      changeColor('purple')
      // Save the new value
      localStorage.setItem('MoneyDisplay', MoneyDisplay);

    // Update the display
    document.getElementById('MoneyDisplay').textContent = MoneyDisplay;
  }}


  let color2 = localStorage.getItem('color') || 'black';
  document.getElementById('header').style.color = color2;

  function changeColor(newColor) {
    color2 = newColor;
    document.getElementById('header').style.color = color2;
    localStorage.setItem('color', color2);
  }

