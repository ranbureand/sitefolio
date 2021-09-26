/* Copyright (c) 2017 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Scroll to
*/

// Get the root element of the page
// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
const rootElement = document.documentElement;

function getElementPosition(element) {
  // Get the position of the element relative to the document
  let scrollLeft = ( window.pageXOffset || rootElement.scrollLeft ) - ( rootElement.clientLeft || 0 );
  let scrollTop = ( window.pageYOffset || rootElement.scrollTop ) - ( rootElement.clientTop || 0 );

  // Get the position of the element relative to the viewport
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  let position = element.getBoundingClientRect();

  let object = {
    x: position.left + scrollLeft,
    y: position.top + scrollTop
  };

  return object;
};

// Get the anchor links in the page
const anchors = document.querySelectorAll('a[href^="#"]'),
      margin = 96;

// Add click event listeners to all anchor links in the page
anchors.forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    // Prevent the default action when clicking on an anchor link
    e.preventDefault();

    // Get the hash of the anchor link and escape any colon character
    // In Markdown, anchor links pointing to footnotes have colon characters in their hashes that break JavaScript when not escaped
    let hash = this.getAttribute('href').replace(':', '\\:');

    // Get the targeted anchor
    let target = document.querySelector(hash);

    // Get the position of the targeted anchor
    let targetPosition = getElementPosition(target);

    // Scroll to the anchor
    window.scrollTo({
        top: targetPosition.y - margin,
        behavior: 'smooth'
    });

    console.log('Scrolled to the element ' + hash + '.');
  });
});