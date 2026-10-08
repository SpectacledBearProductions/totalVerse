'use strict';

let clickCount = 0;

function clickButton() {
  clickCount++;
  document.getElementById('clickCount').textContent = clickCount;
}

function subtract() {
  if (clickCount >= 10) {
    clickCount -= 10;
    document.getElementById('clickCount').textContent = clickCount;
    buyMultiplier();

   document.getElementById('triggerBtn').addEventListener('click', function() {
  });

  }
}

 

function moreclicks() {
  clickCount += 5;
  document.getElementById('clickCount').textContent = clickCount;
  document.getElementById('targetBtn').style.display = 'block';
}
 