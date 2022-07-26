var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.setColor();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.stepCount = 0;
  this.deltaTop = 10;
  this.deltaLeft = 5;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.stepCount += 1;
  var offset = this.$node.offset();
  if (this.stepCount % 10 === 0) {
    this.deltaTop = 0 - this.deltaTop;
  }
  if (this.stepCount % 15 === 0) {
    this.deltaLeft = 0 - this.deltaLeft;
  }
  this.setPosition(offset.top + this.deltaTop, offset.left + this.deltaLeft);
};

makeBlinkyDancer.prototype.setColor = function () {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    borderColor: 'transparent',
    height: 30,
    width: 30,
    borderRadius: 30
  };
  this.$node.css(styleSettings);
  this.$node.append('<img src="https://64.media.tumblr.com/80ff68180530d8302097fdd4679419e6/tumblr_inline_pk0t4gnXUS1ql6jkf_400.gifv">');
};
