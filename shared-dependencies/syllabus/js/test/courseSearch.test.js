import {
  tokenize,
  regexify,
  getCourseTitleAndInstructor,
  searchCourses,
  sortCourses,
} from "./courseSearch";
import Lang from "../config/langs";

describe(">>>UTILS --- Test tokenize", () => {
  test("should tokenize en search terms by non en/number characters", () => {
    expect(tokenize(" search term \t123\t")).toEqual(["search", "term", "123"]);
  });

  test("should tokenize jp search terms by non jp/number characters", () => {
    expect(tokenize(" 検索 ワード \t123\t")).toEqual(["検索", "ワード", "123"]);
  });

  test("should tokenize en+jp search terms by non jp/number characters", () => {
    expect(tokenize("search\tterm'　検索%^&ワード  ")).toEqual([
      "search",
      "term",
      "検索",
      "ワード",
    ]);
  });
});

describe(">>>UTILS --- Test regexify", () => {
  test("should regexify a en token", () => {
    expect(regexify("term", Lang.EN)).toEqual(/\bterm/i);
  });

  test("should regexify a jp token", () => {
    expect(regexify("ワード", Lang.JA)).toEqual(/ワード/i);
  });

  test("should regexify a en+jp token", () => {
    expect(regexify("プログラミングII", Lang.JA)).toEqual(/プログラミングII/i);
  });
});

describe(">>>UTILS --- getCourseTitleAndInstructor", () => {
  const dummyCourse = {
    t: "Advanced Calculus",
    tj: "解析学入門",
    i: "TANAKA, Kazunaga",
    ij: "田中 和永",
  };
  test("should return a en title and instructor given a en searchLang", () => {
    expect(getCourseTitleAndInstructor(dummyCourse, Lang.EN)).toEqual({
      title: "Advanced Calculus",
      instructor: "TANAKA, Kazunaga",
    });
  });

  test("should return a jp title and instructor given a jp searchLang", () => {
    expect(getCourseTitleAndInstructor(dummyCourse, Lang.JA)).toEqual({
      title: "解析学入門",
      instructor: "田中 和永",
    });
  });
});

describe(">>>UTILS --- searchCourses", () => {
  const dummyCourses = [
    {
      t: "Advanced Calculus",
      tj: "解析学入門",
      i: "TANAKA, Kazunaga",
      ij: "田中 和永",
    },
    {
      t: "Advanced Chinese II fall semester-Wed-5 Nagatomi",
      tj: "中国語上級II 秋期水5永冨",
      i: "NAGATOMI, Seiji",
      ij: "永冨 青地",
    },
  ];

  test("should search a course given one en partial title", () => {
    expect(searchCourses("chi", dummyCourses, Lang.EN)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given multiple en partial title", () => {
    expect(searchCourses("adv chi", dummyCourses, Lang.EN)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given its jp partial title", () => {
    expect(searchCourses("上", dummyCourses, Lang.JA)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given its jp partial title", () => {
    expect(searchCourses("中国　秋期", dummyCourses, Lang.JA)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });
});

describe(">>>UTILS --- sortCourses", () => {
  const dummyCourses = [
    {
      t: "Advanced Calculus",
      tj: "解析学入門",
      i: "TANAKA, Kazunaga",
      ij: "田中 和永",
    },
    {
      t: "Advanced Chinese II fall semester-Wed-5 Nagatomi",
      tj: "中国語上級II 秋期水5永冨",
      i: "NAGATOMI, Seiji",
      ij: "永冨 青地",
    },
    {
      t: "Beginners Chinese IA spring semester-Fri-1 Hara",
      tj: "中国語初級IA 春期金1原",
      i: "HARA, Shintaro Alexandre",
      ij: "原 信太郎 アレシャンドレ",
    },
  ];

  const dummyEnCourses = [
    {
      t: "Advanced Calculus",
      i: "TANAKA, Kazunaga",
    },
    {
      t: "Calculus A",
      i: "BOWEN, Mark",
    },
    {
      t: "Advanced Macroeconomics A 01",
      i: "UEDA, Kozo",
    },
  ];

  const dummyJpCourses = [
    {
      tj: "保険数学",
      ij: "内藤 和晃",
    },
    {
      tj: "量子力学特論",
      ij: "山中 由也",
    },
    {
      tj: "中国語上級II 秋期水5永冨",
      ij: "永冨 青地",
    },
  ];

  test("should prioritize en title > instructor > no match", () => {
    expect(sortCourses("ma", dummyEnCourses, Lang.EN)).toEqual([
      dummyEnCourses[2],
      dummyEnCourses[1],
      dummyEnCourses[0],
    ]);
  });

  test("should prioritize jp title > instructor > no match", () => {
    expect(sortCourses("中", dummyJpCourses, Lang.JA)).toEqual([
      dummyJpCourses[2],
      dummyJpCourses[1],
      dummyJpCourses[0],
    ]);
  });
});
