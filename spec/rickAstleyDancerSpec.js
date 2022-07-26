describe('rickDancer', function () {

  var rickDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    rickDancer = new makeRickDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(rickDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(rickDancer.$node, 'toggle');
    rickDancer.step();
    expect(rickDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(rickDancer, 'step');
      expect(rickDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rickDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rickDancer.step.callCount).to.be.equal(2);
    });
  });
});
