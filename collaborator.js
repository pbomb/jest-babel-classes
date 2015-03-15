const MyClass = require('./my-class');

module.exports = {
  getClassName() {
    return new MyClass('my name').getName();
  }
};