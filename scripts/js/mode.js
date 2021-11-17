/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Switch between light and dark mode
*/

var body = document.body,
    modeSwitch = document.getElementById('mode-switch');
let switcher = document.createElement('span'),
    slider = document.createElement('span');

switcher.classList.add('switch');
slider.classList.add('slider');

switcher.append(slider);
modeSwitch.append(switcher);

// Switch between the light and dark mode
function toggleModeDisplay(event) {
  // Prevent the default action when clicking on the switch link
  event.preventDefault();

  // Get the opposite mode (light|dark) to the current selected one
  var oppositeMode = body.className == 'dark' ? 'light' : 'dark';
  // Get the opposite name of the switch link (Dark|Light) to the current selected one
      //oppositeName = body.className == 'dark' ? 'Dark' : 'Light';

  // Set the mode of the body to the opposite one
  body.className = oppositeMode;
  // Set the name of the switch link to the opposite one
  //modeSwitch.textContent = oppositeName;
  //modeSwitch.append(switcher);

  // Save the selected mode in a cookie for 1 year
  var expiryDate = new Date();

  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  document.cookie = 'mode=' + (oppositeMode == 'light' ? 'light' : 'dark') + '; path=/; Expires=' + expiryDate + ';';
  console.log(document.cookie);
}

// Check if the current mode is set to dark
function isDarkModeSelected() {
  return document.cookie.match(/mode=dark/i) != null;
}

// Set the mode based on the mode saved in the cookie
function setModeFromCookie() {
  body.className = isDarkModeSelected() ? 'dark' : 'light';
  //modeSwitch.textContent = isDarkModeSelected() ? 'Light' : 'Dark';
  //modeSwitch.append(switcher);
  console.log(document.cookie);
}

(function() {
  setModeFromCookie();
})();

/*
** Sources
*/

// https://harlemsquirrel.github.io/css/javascript/2017/12/08/dark-light-mode-persistent-switcher.html