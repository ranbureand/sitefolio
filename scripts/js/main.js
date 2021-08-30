/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

console.log('Liftoff!');

/*
** Emails
*/

var eMailbox = 'hello',
  eDomain = 'andreaburan.com',
  eAddress = (eMailbox + '@' + eDomain);

//console.log(eAddress);

var eLink;

//console.log(eLink);

var eEnvelope = document.getElementsByClassName('envelope');

for (i = 0; i < eEnvelope.length; i++) {
  eLink = document.createElement('a');
  eLink.setAttribute('href', 'mailto:' + eAddress);
  eLink.textContent = eAddress;
  eEnvelope[i].prepend(eLink);
}

/*
** Footnotes
*/

var footnote = document.getElementsByClassName('reversefootnote');

//console.log(footnote);

for (i = 0; i < footnote.length; i++) {
  footnote[i].textContent = 'Go Back';
}

/*
** Time
*/

/*
function clock() {
  var now = new Date(),
      hours = now.getHours(),
      minutes = now.getMinutes(),
      ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours + ':' + minutes + ' ' + ampm;

  document.getElementById('time').innerHTML = time;
}

clock();

setInterval(clock, 10000);

const now = new Date();
const tz = now.getTimezoneOffset();

console.log(tz);
*/

/*
** Anchored headings
*/

// Declare variables
var article,
    headings;

// Get the .article-body element
article = document.querySelector(".article-body");

// Initialize the headings variable
if (article !== null) {
  headings = article.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

  for (var i = 0; i < headings.length; i++) {
    headings[i].innerHTML =
      '<a href="#' + headings[i].id + '">' +
          headings[i].innerText +
      '</a>';

    console.log('Anchored heading ' + headings[i].innerText + ' created.');
  }
} else {
  headings = null;

  console.log('No headings created.')
}

/*
** Sticky header
*/

// When the window is scrolled, execute the function stickify()
window.onscroll = function() { stickify() };

// Get the .canvas-header and .header elements
const canvasHeader = document.querySelector(".canvas-header"),
      header = document.querySelector(".header");

// Get the offset position of the .header element
var   offset = header.offsetTop;

// When the window is resized, get again the offset position of the .header element
window.onresize = function(){ offset = header.offsetTop };

// When you reach the position of the .header element, add the class .sticky to the .canvas-header element
// When you unreach the position of the .header element, remove the class .sticky from the .canvas-header element
function stickify() {
  if ( window.pageYOffset > offset ) {
    canvasHeader.classList.add('sticky');
  } else {
    canvasHeader.classList.remove('sticky');
  }
}
