import { Urls } from "../index";

const TruthfulURLSList: string[] = [
  "http://test.example",
  "http://www.test.example",
  "https://test.example",
  "https://www.test.example",
  "http://test.example",
  "ftp://test.example",
  "139.44.244.11",
  "https://www.test-example.example",
  "//cdntest.cloudtest.net/css/style.css",
  "www.test.example",
  "test.example"
];

const InvalidURLSList: string[] = [
  "htt://test.example",
  "http://test.example?query= r",
  "https:/test.example.com",
  "test.d",
  "test",
  "http://test",
  "ft://test.example"
];

describe("Test URLs utils", () => {
  describe("isValidURL function", () => {
    const { isValidURL } = Urls;

    test("Should return true if every URL in truthful URLS list is valid", () => {
      const isValid = TruthfulURLSList.every((url) => {
        const test = isValidURL(url);

        if (!test) {
          throw Error(`Error in: ${url}`);
        }

        return test;
      });

      expect(isValid).toBeTruthy();
    });

    test("Should return true if every URL in invalid URLS list is invalid", () => {
      const isValid = InvalidURLSList.every((url) => {
        const test = !isValidURL(url);

        if (!test) {
          throw Error(`Error in: ${url}`);
        }

        return test;
      });

      expect(isValid).toBeTruthy();
    });
  });

  const testParams: string =
    "?fio=Zubenko_Mikhail_Petrovich&profession=vor_v_zakone&birthday=2007&is_mafioznik=1";
  const testSerialize: { [key: string]: string | number[] } = {
    fio: "Zubenko_Mikhail_Petrovich",
    profession: "vor_v_zakone",
    birthday: "2007",
    is_mafioznik: "1"
  };

  describe("parseParams function", () => {
    const { parseParams } = Urls;

    type TZubenko = any | {
      fio: string
      profession: string
      birthday: string
      is_mafioznik: string
    }

    test("Should return all keys in query string", () => {
      const obj: TZubenko = parseParams(testParams);

      expect(obj).toEqual(testSerialize);
      expect(obj["fio"]).toEqual("Zubenko_Mikhail_Petrovich");
      expect(obj["profession"]).toEqual("vor_v_zakone");
      expect(obj["birthday"]).toEqual("2007");
      expect(obj["is_mafioznik"]).toEqual("1");
    });

    test("Should return empty object", () => {
      const obj1 = parseParams("");
      const obj2 = parseParams("?");
      const obj3 = parseParams("?fio=");

      expect(Object.keys(obj1).length).toBe(0);
      expect(Object.keys(obj2).length).toBe(0);
      expect(Object.keys(obj3).length).toBe(0);
    });
  });

  describe("serializeParams function", () => {
    const { serializeParams } = Urls;

    test("Should be equal to test object", () => {
      testSerialize['arr'] = [1, 2, 3];

      const query = "?" + serializeParams(testSerialize);

      expect(query).toEqual(testParams + '&arr=1,2,3');
    });
  });
});
