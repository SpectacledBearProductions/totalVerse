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