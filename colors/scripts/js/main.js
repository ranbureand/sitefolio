/*!
** Generate a color palette by interpolating a start and end color.
*/

var rectWidth = 160,
    rectHeight = 64;

/*
** Light mode background colors.
*/

var lBack = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 0.945, h: 0},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 0.985, h: 0}
};

/*
** Dark mode background colors.
*/

var dBack = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 0.12, h: 0},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 0.16, h: 0}
};

/*
** Light mode background colors.
*/

// Create an array of the light mode background colors.
var lBackgroundColors = [];

lBackgroundColors.push(
  lBack
);

/*
** Light mode interface colors.
*/

var lCS = 0.88, // light mode color saturation
    lCL = 0.56, // light mode color luminance
    lCLI = 0.08, // light mode color luminance increment
    lCLD = 0.12, // light mode color luminance decrement
    lC1H = 16, // light mode color 1 hue
    lC2H = 288; // light mode color 2 hue

// Decline the light mode interface colors (different tones).
var lText = {
      'dark'    : {mode: 'okhsl', alpha: 0.92, s: 0.00, l: 0.00, h: 0},
      'normal'  : {mode: 'okhsl', alpha: 0.76, s: 0.00, l: 0.00, h: 0},
      'light'   : {mode: 'okhsl', alpha: 0.60, s: 0.00, l: 0.00, h: 0}
    },
    lColor1 = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: lCS, l: lCL, h: lC1H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + lCLI), h: lC1H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + (lCLI*2)), h: lC1H},
    },
    lColor1Darker = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL - lCLD), h: lC1H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + lCLI - lCLD), h: lC1H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + (lCLI*2) - lCLD), h: lC1H}
    },
    lColor2 = {
      'dark'   : {mode: 'okhsl', alpha: 1.00, s: lCS, l: lCL, h: lC2H},
      'normal' : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + lCLI), h: lC2H},
      'light'  : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + (lCLI*2)), h: lC2H}
    },
    lColor2Darker = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL - lCLD), h: lC2H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + lCLI - lCLD), h: lC2H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: lCS, l: (lCL + (lCLI*2) - lCLD), h: lC2H}
    };

// Create an array of the light mode interface colors.
var lInterfaceColors = [];

lInterfaceColors.push(
  lText,
  lColor1,
  lColor1Darker,
  lText,
  lColor2,
  lColor2Darker
);

/*
** Light mode code colors.
*/

const lCCS = 0.88, // light mode code color saturation
      lCCL = 0.48, // light mode code color luminance
      lCCLI = 0.08, // light mode code color luminance increment
      lCCLD = 0.12; // light mode code color luminance decrement

const lCCHs = [
      0,   // red // light mode code color 1 hue
      30,  // redOrange // light mode code color 2 hue
      60,  // orange // light mode code color 3 hue
      90,  // yellowOrange // light mode code color 4 hue
      120, // yellow // light mode code color 5 hue
      150, // yellowGreen // light mode code color 6 hue
      180, // green // light mode code color 7 hue
      210, // blueGreen // light mode code color 8 hue
      240, // blue // light mode code color 9 hue
      270, // blueViolet // light mode code color 10 hue
      300, // violet // light mode code color 11 hue
      330  // redViolet // light mode code color 12 hue
];

// Create an array of the light mode code colors.
let lCodeColors = [];

for (let i = 0; i < lCCHs.length; i++) {
  lCodeColors.push({
    'dark'    : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: lCCL, h: lCCHs[i]},
    'normal'  : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: (lCCL + lCCLI), h: lCCHs[i]},
    'light'   : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: (lCCL + (lCCLI*2)), h: lCCHs[i]}
  });
  lCodeColors.push({
    'dark'    : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: (lCCL - lCCLD), h: lCCHs[i]},
    'normal'  : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: (lCCL + lCCLI - lCCLD), h: lCCHs[i]},
    'light'   : {mode: 'okhsl', alpha: 1.00, s: lCCS, l: (lCCL + (lCCLI*2) - lCCLD), h: lCCHs[i]}
  });
}

/*
** Dark mode background colors.
*/

// Create an array of the dark mode background colors.
var dBackgroundColors = [];

dBackgroundColors.push(
  dBack
);

/*
** Dark mode interface colors.
*/

var dCS = 0.88, // dark mode color saturation
    dCL = 0.64, // dark mode color luminance
    dCLI = 0.08, // dark mode color luminance increment
    dCLD = 0.12, // dark mode color luminance decrement
    dC1H = 16, // dark mode color 1 hue
    dC2H = 288; // dark mode color 2 hue

// Decline the dark mode interface colors (different tones).
var dText = {
      'dark'    : {mode: 'okhsl', alpha: 0.92, s: 0.00, l: 1.00, h: 0},
      'normal'  : {mode: 'okhsl', alpha: 0.76, s: 0.00, l: 1.00, h: 0},
      'light'   : {mode: 'okhsl', alpha: 0.60, s: 0.00, l: 1.00, h: 0}
    },
    dColor1 = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: dCS, l: dCL, h: dC1H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + dCLI), h: dC1H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + (dCLI*2)), h: dC1H},
    },
    dColor1Darker = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL - dCLD), h: dC1H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + dCLI - dCLD), h: dC1H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + (dCLI*2) - dCLD), h: dC1H}
    },
    dColor2 = {
      'dark'   : {mode: 'okhsl', alpha: 1.00, s: dCS, l: dCL, h: dC2H},
      'normal' : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + dCLI), h: dC2H},
      'light'  : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + (dCLI*2)), h: dC2H}
    },
    dColor2Darker = {
      'dark'    : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL - dCLD), h: dC2H},
      'normal'  : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + dCLI - dCLD), h: dC2H},
      'light'   : {mode: 'okhsl', alpha: 1.00, s: dCS, l: (dCL + (dCLI*2) - dCLD), h: dC2H}
    };

// Create an array of the dark mode interface colors.
var dInterfaceColors = [];

dInterfaceColors.push(
  dText,
  dColor1,
  dColor1Darker,
  dText,
  dColor2,
  dColor2Darker
);

/*
** Dark mode code colors.
*/

const dCCS = 0.88, // light mode code color saturation
      dCCL = 0.72, // light mode code color luminance
      dCCLI = 0.08, // light mode code color luminance increment
      dCCLD = 0.12; // light mode code color luminance decrement

const dCCHs = [
      0,   // red // light mode code color 1 hue
      30,  // redOrange // light mode code color 2 hue
      60,  // orange // light mode code color 3 hue
      90,  // yellowOrange // light mode code color 4 hue
      120, // yellow // light mode code color 5 hue
      150, // yellowGreen // light mode code color 6 hue
      180, // green // light mode code color 7 hue
      210, // blueGreen // light mode code color 8 hue
      240, // blue // light mode code color 9 hue
      270, // blueViolet // light mode code color 10 hue
      300, // violet // light mode code color 11 hue
      330  // redViolet // light mode code color 12 hue
];

// Create an array of the dark mode code colors.
let dCodeColors = [];

for (let i = 0; i < dCCHs.length; i++) {
  dCodeColors.push({
    'dark'    : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: dCCL, h: dCCHs[i]},
    'normal'  : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: (dCCL + dCCLI), h: dCCHs[i]},
    'light'   : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: (dCCL + (dCCLI*2)), h: dCCHs[i]}
  });
  dCodeColors.push({
    'dark'    : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: (dCCL - dCCLD), h: dCCHs[i]},
    'normal'  : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: (dCCL + dCCLI - dCCLD), h: dCCHs[i]},
    'light'   : {mode: 'okhsl', alpha: 1.00, s: dCCS, l: (dCCL + (dCCLI*2) - dCCLD), h: dCCHs[i]}
  });
}

/*
** Setup playground.
*/

const lPlayground = document.querySelectorAll('.l-playground');
lPlayground.forEach(playground => {
    playground.style.backgroundColor = culori.formatHex(lBack['normal']);
    let width = rectWidth/2*lCodeColors.length + 128*2 + 'px';
    playground.style.width = width;
});

const dPlayground = document.querySelectorAll('.d-playground');
dPlayground.forEach(playground => {
    playground.style.backgroundColor = culori.formatHex(dBack['normal']);
    let width = rectWidth/2*dCodeColors.length + 128*2 + 'px';;
    playground.style.width = width;
});

/*
** Generate the light mode background color swatches.
*/

var lBackgroundSwatches = SVG().addTo('.l-background-swatches').size(rectWidth*lBackgroundColors.length, rectHeight*Object.keys(lBack).length);

for(var i = 0; i < lBackgroundColors.length; i++) {

  Object.keys(lBackgroundColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(lBackgroundColors[i][tone]);

    // Generate the color swatch.
    var rect = lBackgroundSwatches.rect(rectWidth, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Generate the light mode interface color swatches.
*/

var lInterfaceSwatches = SVG().addTo('.l-interface-swatches').size(rectWidth*lInterfaceColors.length, rectHeight*Object.keys(lText).length);

for(var i = 0; i < lInterfaceColors.length; i++) {

  Object.keys(lInterfaceColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(lInterfaceColors[i][tone]);

    // Generate the color swatch.
    var rect = lInterfaceSwatches.rect(rectWidth, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Generate the light mode code color swatches.
*/

var lCodeSwatches = SVG().addTo('.l-code-swatches').size(rectWidth/2*lCodeColors.length, rectHeight*Object.keys(lText).length);

for(var i = 0; i < lCodeColors.length; i++) {

  Object.keys(lCodeColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(lCodeColors[i][tone]);

    // Generate the color swatch.
    var rect = lCodeSwatches.rect(rectWidth/2, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth/2*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Generate the dark mode background color swatches.
*/

var dBackgroundSwatches = SVG().addTo('.d-background-swatches').size(rectWidth*dBackgroundColors.length, rectHeight*Object.keys(dBack).length);

for(var i = 0; i < dBackgroundColors.length; i++) {

  Object.keys(dBackgroundColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(dBackgroundColors[i][tone]);

    // Generate the color swatch.
    var rect = dBackgroundSwatches.rect(rectWidth, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Generate the dark mode interface color swatches.
*/

var dInterfaceSwatches = SVG().addTo('.d-interface-swatches').size(rectWidth*dInterfaceColors.length, rectHeight*Object.keys(dText).length);

for(var i = 0; i < dInterfaceColors.length; i++) {

  Object.keys(dInterfaceColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(dInterfaceColors[i][tone]);

    // Generate the color swatch.
    var rect = dInterfaceSwatches.rect(rectWidth, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Generate the dark mode code color swatches.
*/

var dCodeSwatches = SVG().addTo('.d-code-swatches').size(rectWidth/2*dCodeColors.length, rectHeight*Object.keys(dText).length);

for(var i = 0; i < dCodeColors.length; i++) {

  Object.keys(dCodeColors[i]).forEach(function(tone, j) {
    // tone: the name of the object key.
    // j: the index of the key within the object.

    var hex = culori.formatRgb(dCodeColors[i][tone]);

    // Generate the color swatch.
    var rect = dCodeSwatches.rect(rectWidth/2, rectHeight);

    rect.attr({
      fill: hex,
      x: 0 + rectWidth/2*i,
      y: 0 + rectHeight*j,
    });
  });

};

/*
** Copy a color swatch.
*/

// Copy text to clipboard
function copyColorHexToClipboard(text, color) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Color copied to clipboard: " + color);
  }).catch(err => {
    console.error('Color not copied to clipboard: ', err);
  });
}

// Add click event to each SVG rectangle
function addClickEventToRectangle(rect) {
  rect.addEventListener('click', function() {
    const fillColor = this.getAttribute('fill');
    copyColorHexToClipboard(fillColor, fillColor);
  });
}

// Get all rectangles in the SVGs and add click events
document.querySelectorAll('svg rect').forEach(addClickEventToRectangle);

/*
** Download the color swatches.
*/

var lInterfaceSwatchesFile = lInterfaceSwatches.svg();
var lCodeSwatchesFile = lCodeSwatches.svg();

// This code snippet taken from:
// https://gist.github.com/danallison/3ec9d5314788b337b682
function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

window.addEventListener('keydown', checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "73") { // “i” key.
    downloadString(lInterfaceSwatchesFile, 'image/svg+xml', 'Interface_Color_Swatches');
  } else if (e.keyCode == "67") { // “c” key.
    downloadString(lCodeSwatchesFile, 'image/svg+xml', 'Code_Color_Swatches');
  }
}