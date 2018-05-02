describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});




// describe('specialDancer', function() {

//   var specialDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     specialDancer = new makespecialDancer(10, 20, timeBetweenSteps);
//   });

//   it('should have a jQuery $node object', function() {
//     expect(specialDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it('should have a step function that makes its node blink', function() {
//     sinon.spy(specialDancer.$node, 'toggle');
//     specialDancer.step();
//     expect(specialDancer.$node.toggle.called).to.be.true;
//   });

//   describe('dance', function() {
//     it('should call step at least once per second', function() {
//       sinon.spy(specialDancer, 'step');
//       expect(specialDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(specialDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(specialDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });
 
