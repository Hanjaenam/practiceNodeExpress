function Test() {
  this.k = 'k';
}
Test.prototype.a = function() {
  console.log(this.k);
};
Test.prototype.b = function() {
  this.a();
};

const test = new Test();
test.b();
