describe('specialDancer', function() {

  var specialDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    specialDancer = new makespecialDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(specialDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not use the step function', function() {
    sinon.spy(specialDancer.$node, 'step');
    specialDancer.step();
    expect(specialDancer.$node.step.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(specialDancer, 'step');
      expect(specialDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(specialDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(specialDancer.step.callCount).to.be.equal(2);
    });
  });
});