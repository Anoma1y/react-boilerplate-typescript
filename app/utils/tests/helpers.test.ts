import Helpers from "../helpers";

type IObj = {
  [key: string]: any;
};

type IObjectArray = {
  id: number;
  name: string;
}[];

describe("Test helpers utils", () => {
  describe("removeEmpty function", () => {
    const { removeEmpty } = Helpers;
    const obj: IObj = {
      name: "Zubenko M.P.",
      age: 21,
      is_mafioznik: 1,
      bio: undefined
    };
    const modifiedObj: IObj = removeEmpty(obj);

    test("Should return length 3", () => {
      expect(Object.keys(modifiedObj).length).toEqual(3);
    });

    test('Should not have properties "bio"', () => {
      expect(modifiedObj).not.toHaveProperty("bio");
    });
  });

  describe("objectToArray function", () => {
    const { objectToArray } = Helpers;
    const obj: { [key: number]: string } = {
      0: "Test 1",
      1: "Test 2",
      2: "Test 3"
    };

    const modifiedArr: IObjectArray = objectToArray(obj);

    test("Should return length 3", () => {
      expect(modifiedArr.length).toEqual(3);
    });

    test("Should return equal test obj to modified array", () => {
      const test = modifiedArr.every((it, i) => it["name"] === obj[i]);

      expect(test).toBeTruthy();
    });
  });
});
