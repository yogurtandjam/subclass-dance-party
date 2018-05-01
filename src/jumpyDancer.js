
var jumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

jumpyDancer.prototype = Object.create(makeDancer.prototype);
jumpyDancer.prototype.constructor = jumpyDancer;
jumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
};

