/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

console.log('Liftoff!');

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

var link_email = document.getElementById('link-email');

link_email.setAttribute('href', 'mailto:' + eAddress);

var footnote = document.getElementsByClassName('reversefootnote');

for (i = 0; i < footnote.length; i++) { 
    footnote[i].textContent = 'Back to Number';
}