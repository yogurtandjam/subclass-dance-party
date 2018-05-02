
var makejumpyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="foxy" src= "https://media.giphy.com/media/mTA0oR5zN08qA/giphy.gif"/></span>');
  this.setPosition(top, left);
};

makejumpyDancer.prototype = Object.create(makeDancer.prototype);
makejumpyDancer.prototype.constructor = makejumpyDancer;
makejumpyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.animate({'marginTop' : '-30px'});
  this.$node.animate({'marginTop' : '+30px'});
};