const { add, divide } = require("../src/math");

test("Test add function", () => {
  expect(add(1, 2)).toBe(3);
});

test("Test divide by zero", () => {
  expect(divide(5, 0)).toBe("Can't divide by Zero");
});

test("Test divide function", () => {
  expect(divide(9, 0)).toBe(0);
});
