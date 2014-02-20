describe('factorialFinder', function() {
  it('calculates the integers position, multiplying the number by itsef and each positive integer below it', function() {
    factorialFinder(5).should.equal(120);
  });
  it('returns false for numbers that are less that 0', function() {
    factorialFinder(-3).should.equal(false);
  });
  it('returns 1 for factorial 0', function() {
    factorialFinder(0).should.equal(1);
  })


//   it("is true for most years divisible by 4", function() {
//     leapYear(2012).should.equal(true);
//   });
});
