var makespecialDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer specialDancer"><img class="foxy" src= "https://media.giphy.com/media/l0IyfmUcICJELaEuY/giphy.gif"/></span>');
};

makespecialDancer.prototype = Object.create(makeDancer.prototype);
makespecialDancer.prototype.constructor = makespecialDancer;
