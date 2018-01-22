/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

console.log('Liftoff!');

var eMailbox = 'hello',
    eDomain = 'andreaburan.com',
    eAddress = (eMailbox + '@' + eDomain);

//console.log(eAddress);

var eLink = document.createElement('a');
    eLink.setAttribute('href', 'mailto:' + eAddress);
    eLink.textContent = eAddress;

//console.log(eLink);

var eEnvelope = document.getElementById('envelope');
    eEnvelope.prepend(eLink);

var footnote = document.getElementsByClassName('reversefootnote');
    footnote[0].textContent = 'Back to Number';
