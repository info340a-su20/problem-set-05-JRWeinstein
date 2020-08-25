'use strict';

//Below is an object containing different color palettes that you will show
//Palettes from ColorBrewer (http://colorbrewer2.org/)
const COLORS_9 = {
  Spectral: ['#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd'],
  Reds: ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'],
  Blues: ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],
  Greens: ['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],
  Purples: ['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],
};

/* Your code goes here! */

//Create a variable `h1` that refers to the `<h1>` element in the DOM.
let h1 = document.querySelector("h1");

//Change the `textContent` of the `<h1>` element to be "Which Swatch?"
h1.textContent = "Which Swatch?";

//Somehow the rainbow icon image was included without an alt tag! Set its `alt`
//attribute to be "A beautiful rainbow".
let imgElem = document.querySelector("img");
imgElem.alt = "A beautiful rainbow";

//Give the image the Bootstrap-provided `float-right` CSS class to make it float
//to the right of the screen
imgElem.classList.add('float-right');


/*Define a function `createColorBox()` that takes in two parameters: a color 
string (e.g., "blue") and a numeric size (in pixels, e.g., 100). The function 
shoukld do the following:
  - create a new `div` element
  - give the element the CSS class of `d-inline-block`
  - give the element an inline style `background-color` of the argument color
  - give the element an inlight style `width` and `height` properties that are 
    both the passed in size in pixels(as strings, e.g., "100px")
  - RETURNS the div element!
You can test this function by logging out the returned value and checking its
attributes.
*/
function createColorBox(colorString, pixelVal) {
  let divElem = document.createElement('div');
  divElem.classList.add('d-inline-block');
  divElem.style.backgroundColor = colorString;
  divElem.style.width = pixelVal + "px";
  divElem.style.height = pixelVal + "px";
  return divElem;
}


/* Define a function `getElementWidth()` that takes in a DOM element (not a 
string!). This function should return the width in pixels (a number) of that
element.
 - Determine this width by calling the `getBoundingClientRect()` method on the
   argument element. This method returns an Object containing the element's
   width and height. Return the `width` value of that object.
*/
function getElementWidth(domElem) {
  return domElem.getBoundingClientRect().width;
}


/* Define a function `renderPaletteRow()` that takes in two arguments: array of 
color strings (like a SINGLE ELEMENT of the `COLORS_9` object), and a "parent" 
DOM element. The function should do the following:
  - Create a new `div` element to contain a row of colored boxes
  - Use the `createColorBox()` function to create a div FOR EACH element in the 
    argument array. Each "color box" should take up an equal portion of the 
    parent element (e.g., if the parent has a width of 600 and the array has 3 
    elements, each color box would be 200px in size).    
    You should use your `getElementWidth()` function (passing in the "parent" 
    DOM element) to determine its width.
  - Append EACH "color box" to the container div you created.
  - Append the container div to the parent element.

You can test the function by calling it and passing it one of the `COLORS_9`
palettes (e.g., `COLORS_9.Reds`) and a reference to the the <main> element (not the
selector, but the element itself). Note that the palette will not resize with the
browser window unless you refresh.

You should NOT include any test calls when running Jest tests!
*/
function renderPaletteRow(colorArr, domElem) {
  let divElem = document.createElement('div');
  for (var i = 0; i < colorArr.length; i++) {
    divElem.appendChild(createColorBox(colorArr[i], getElementWidth(domElem) / colorArr.length));
  }
  domElem.appendChild(divElem);
}
//console.log(renderPaletteRow(COLORS_9.Reds, document.getElementsById("main")));

/* Define a function `renderPaletteTable()` that takes no arguments and renders 
a color palette row for each of the palettes in the `COLORS_9` object into the 
<main> element. This function should _call_ your `renderPaletteRow()` function 
as a helper.

Tip: note that `COLORS_9` is an object, not an array! You'll need to use a 
`for...in` loop or `Object.keys()` to iterate through its keys.

Call your `renderPaletteTable()` method to display all the color palettes!
*/
function renderPaletteTable() {
  let mainElem = document.querySelector("main");
  Object.keys(COLORS_9).forEach(
    function(x) {
      renderPaletteRow(COLORS_9[x], mainElem);
    }
  );
}
renderPaletteTable();

//Finally, remove the paragraph in the header that explains how to complete the 
//problem.



//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof createColorBox !== 'undefined') 
    module.exports.createColorBox = createColorBox;
  if(typeof renderPaletteRow !== 'undefined') 
    module.exports.renderPalette = renderPaletteRow;
}