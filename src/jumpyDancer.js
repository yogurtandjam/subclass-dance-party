
var jumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="foxy" src= "https://media.giphy.com/media/mTA0oR5zN08qA/giphy.gif"/></span>');
  this.setPosition(top, left);
};

jumpyDancer.prototype = Object.create(makeDancer.prototype);
jumpyDancer.prototype.constructor = jumpyDancer;
jumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  // console.log(this.timeBetweenSteps)
  this.$node.animate({'marginTop' : '-30px'});
  this.$node.animate({'marginTop' : '+30px'});
};