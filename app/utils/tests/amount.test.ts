import { Amount } from "../index";

describe("Test amount utils", () => {
  describe("amountInput function", () => {
    const { amountInput } = Amount;

    test("Should return type Number", () => {
      expect(typeof amountInput(100)).toBe("number");
    });

    test("Should return type Number from String", () => {
      expect(typeof amountInput("100")).toBe("number");
    });

    test("Should return a positive value", () => {
      expect(amountInput(0)).toEqual(0);
      expect(amountInput(154)).toEqual(15400);
      expect(amountInput("154")).toEqual(15400);
      expect(amountInput("0154")).toEqual(15400);
    });

    test("Should return a positive value from a floating point number", () => {
      expect(amountInput(145.11)).toEqual(14511);
      expect(amountInput("145.11")).toEqual(14511);
      expect(amountInput("0145.11")).toEqual(14511);
    });

    test("Should return a negative value", () => {
      expect(amountInput(-154)).toEqual(-15400);
      expect(amountInput("-154")).toEqual(-15400);
      expect(amountInput("-0154")).toEqual(-15400);
    });

    test("Should return a negative value from a floating point number", () => {
      expect(amountInput(-145.11)).toEqual(-14511);
      expect(amountInput("-145.11")).toEqual(-14511);
      expect(amountInput("-0145.11")).toEqual(-14511);
    });

    test("Should return 0 if value more than MAX_SAFE_INTEGER", () => {
      expect(amountInput(Number.MAX_SAFE_INTEGER)).toEqual(0);
    });

    test("Should return 0 if value less than MIN_SAFE_INTEGER", () => {
      expect(amountInput(Number.MIN_SAFE_INTEGER)).toEqual(0);
    });

    test("Should return NaN", () => {
      expect(amountInput(NaN)).toBeNaN();
      expect(amountInput("12,11")).toBeNaN();
      expect(amountInput("125a")).toBeNaN();
      expect(amountInput("test")).toBeNaN();
    });
  });

  describe("StringReplaceToNumber function", () => {
    const { stringReplaceToNumber } = Amount;

    test("Should return 0", () => {
      expect(stringReplaceToNumber("0")).toEqual(0);
    });

    test("Should return 0 if there are no numbers", () => {
      expect(stringReplaceToNumber("only text")).toEqual(0);
    });

    test("Should return numbers", () => {
      expect(stringReplaceToNumber("123.323wq")).toEqual(123323);
      expect(stringReplaceToNumber("123.323")).toEqual(123323);
      expect(stringReplaceToNumber("1/2/3.3.2.3")).toEqual(123323);
    });
  });

  describe("AmountOutput function", () => {
    const { amountOutput } = Amount;

    test("Should return type Number", () => {
      expect(typeof amountOutput(100)).toBe("number");
    });

    test("Should return type Number from String", () => {
      expect(typeof amountOutput("100")).toBe("number");
    });

    test("Should return a positive integer value ", () => {
      expect(amountOutput(150000)).toEqual(1500);
      expect(amountOutput("150000")).toEqual(1500);
    });

    test("Should return a negative integer value ", () => {
      expect(amountOutput(-150000)).toEqual(-1500);
      expect(amountOutput("-150000")).toEqual(-1500);
    });

    test("Should return a positive floating value", () => {
      expect(amountOutput(0)).toEqual(0);
      expect(amountOutput(154)).toEqual(1.54);
      expect(amountOutput("154")).toEqual(1.54);
      expect(amountOutput("0154")).toEqual(1.54);
      expect(amountOutput(545477888)).toEqual(5454778.88);
      expect(amountOutput("545477888")).toEqual(5454778.88);
    });

    test("Should return a negative floating value", () => {
      expect(amountOutput(-154)).toEqual(-1.54);
      expect(amountOutput("-154")).toEqual(-1.54);
      expect(amountOutput("-0154")).toEqual(-1.54);
    });

    test("Should return NaN", () => {
      expect(amountOutput(NaN)).toBeNaN();
      expect(amountOutput("12,11")).toBeNaN();
      expect(amountOutput("125a")).toBeNaN();
      expect(amountOutput("test")).toBeNaN();
    });
  });
});
