window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

var blinder = require('color-blind');

var colorBlindWatch = $('.color-blind-watch');
var colorBlindExplanation = $('.color-blind-explanation');
var colorBlindResult = $('.color-blind-result-watch');

var randomColor = '#000000';

window.setInterval(function(){
    randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    colorBlindFn(randomColor);
  }, 1000);

var colorBlindFn = function(color) {
  var anomaly = parseInt($('.color-blind-select').val());

  switch (anomaly) {
    case 1:
    explanation = "The viewer sees low amounts of red.";
    result = blinder.protanomaly(color);
    break;
    case 2:
    explanation = "The viewer sees no red.";
    result = blinder.protanopia(color);
    break;
    case 3:
    explanation = "The viewer sees low amounts of green.";
    result = blinder.deuteranomaly(color);
    break;
    case 4:
    explanation = "The viewer sees no green.";
    result = blinder.deuteranopia(color);
    break;
    case 5:
    explanation = "The viewer sees low amounts of blue.";
    result = blinder.tritanomaly(color);
    break;
    case 6:
    explanation = "The viewer sees no blue.";
    result = blinder.tritanopia(color);
    break;
    case 7:
    explanation = "The viewer sees low amounts of color at all.";
    result = blinder.achromatomaly(color);
    break;
    case 8:
    explanation = "The viewer sees no color.";
    result = blinder.achromatopsia(color);
    break;
  }

  colorBlindExplanation.text(explanation);

  colorBlindWatch.text(color);
  colorBlindWatch.css('background-color', color);

  colorBlindResult.text(result);
  colorBlindResult.css('background-color', result);
};
