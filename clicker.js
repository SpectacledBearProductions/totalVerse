'use strict';

let clickCount = 0;

function clickButton() {
  clickCount++;
  document.getElementById('clickCount').textContent = clickCount;
}