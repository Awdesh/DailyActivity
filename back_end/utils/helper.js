// "use strict";

module.exports = function(A, B) {
  var app = 'Hello';
  console.log(app);

  var lenA = A.length;
  console.log(lenA);

  var lenB = B.length;
  console.log(lenB);

  if (lenA != lenB) {
    console.log('Not Anagrams');
    process.exit(1);
  }

  let i = 0;
  let j = 0;

  while (i < lenA && j < lenB) {
    // if()
  }
  return app;
};
