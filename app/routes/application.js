import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return "A windmill is a mill that converts the energy of wind into rotational energy by means of vanes called sails or blades. Traditional windmills were often used to mill grain, pump water, or both. Most modern windmills take the form of wind turbines used to generate electricity, or windpumps used to pump water, either for land drainage or to extract groundwater.";
  },

  actions: {
    keyPress(actual, expected) {
      if (actual !== expected) {
        console.log(`Missed: actual: "${actual}", expected: "${expected}"`);
      }
    },

    completed() {
      console.log('Success!');
    }
  }
});