var makeRickDancer = function(top, left, timeBetweenSteps) {
  makePopDancer.call(this, top, left, timeBetweenSteps);
};

makeRickDancer.prototype = Object.create(makePopDancer.prototype);
makeRickDancer.prototype.constructor = makeRickDancer;

makeRickDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  makePopDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeRickDancer.prototype.setStyle = function () {
  var styleSettings = {
    height: 100,
    width: 100,
    borderColor: 'transparent',
    borderRadius: 50
  };
  this.$node.css(styleSettings);
  this.$node.append('<img src="https://thumbs.gfycat.com/ScientificAmusedJenny-max-1mb.gif">');
};
