
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 makeDancer.call(this, top, left, timeBetweenSteps);
 this.$node = $('<span class="dancer foxy"><img class="foxy" src= "https://media.giphy.com/media/GGoNXhnkajiko/giphy.gif"/></span>');
 this.timeBetweenSteps = timeBetweenSteps
 this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};
