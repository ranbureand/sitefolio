/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

console.log('Liftoff!');

/*
** Emails
*/

// Declare and assign the email address variable
const eMail = ('hello' + '@' + 'andreaburan.com');

//console.log(eAddress);

// Declare the email link variable
var   eLink;

//console.log(eLink);

// Get the .envelope elements
const eEnvelope = document.getElementsByClassName('envelope');

// Assign the email link variable and inject it in the HTML DOM
for (i = 0; i < eEnvelope.length; i++) {
  eLink = document.createElement('a');
  eLink.setAttribute('href', 'mailto:' + eMail);
  eLink.textContent = eMail;
  eEnvelope[i].prepend(eLink);

  console.log('Email created.');
}

/*
** Footnotes
*/

// Get the .reversefootnote elements
var footnote = document.getElementsByClassName('reversefootnote');

//console.log(footnote);

// Change the default copy of the footnote links
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
var   article,
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

// Get the .canvas-header and .header elements
const canvasHeader = document.querySelector(".canvas-header"),
      header = document.querySelector(".header");

// Get the offset position of the .header element
var   offset = header.offsetTop;

// When you reach the position of the .header element, add the class .sticky to the .canvas-header element
// When you unreach the position of the .header element, remove the class .sticky from the .canvas-header element
function stickify() {
  if ( window.pageYOffset > offset ) {
    canvasHeader.classList.add('sticky');
  } else {
    canvasHeader.classList.remove('sticky');
  }
}

stickify();

// When the window is scrolled, execute the function stickify()
window.onscroll = function() {
  stickify();
};

// When the window is resized, get again the offset position of the .header element and execute the function stickify()
window.onresize = function() {
  canvasHeader.classList.remove('sticky');
  offset = header.offsetTop;

  stickify();
};
