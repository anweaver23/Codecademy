const batch = [
  [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8], // valid1
  [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9], // valid2
  [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6], // valid3
  [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5], // valid4
  [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6], // valid5
  [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5], // invalid1
  [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3], // invalid2
  [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4], // invalid3
  [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5], // invalid4
  [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4], // invalid5
  [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4], // mystery1
  [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9], // mystery2
  [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3], // mystery3
  [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3], // mystery4
  [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3], // mystery5
];

const validateCred = (arr) => {
  return (
    //[...arr] is used to create a copy instead of arr to avoid mutating the array when reversing
    [...arr]
      .reverse()
      //map new arr doubling odd indexes on reversed array
      .map((num, i) => (i % 2 === 1 ? num * 2 : num))
      //map new arr subtracting 9 if value over 9
      .map((num) => (num > 9 ? num - 9 : num))
      //reduce by sum and return sum mod 10 t or f
      .reduce((acc, curr) => acc + curr, 0) %
      10 ===
    0
  );
};

const findInvalidCards = (parentArr) => {
  // keep the children if validateCred() returns false
  return parentArr.filter((childArr) => !validateCred(childArr));
};

const idInvalidCardCompanies = (parentArr) => {
  return (
    parentArr
      //map new arr replacing card numbers with their company name based on the 0 index number
      .map((childArr) => {
        switch (childArr[0]) {
          case 3:
            return "Amex (American Express)";
            break;
          case 4:
            return "Visa";
            break;
          case 5:
            return "Mastercard";
          case 6:
            return "Discover";
          default:
            return "Company not found";
        }
      })
      //filter and keep only distinct values
      .filter((value, i, array) => {
        return array.indexOf(value) === i;
      })
  );
};

const invalidCards = findInvalidCards(batch);

const invalidCardCompanies = idInvalidCardCompanies(invalidCards);

console.log(`Offenders: ${invalidCardCompanies.join(", ")}`);
