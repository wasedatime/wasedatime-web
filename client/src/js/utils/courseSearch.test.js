import {
  tokenize,
  regexify,
  getCourseTitleAndInstructor,
  searchCourses,
  sortCourses
} from "./courseSearch";
import LANGS from "../config/langs";

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
      "ワード"
    ]);
  });
});

describe(">>>UTILS --- Test regexify", () => {
  test("should regexify a en token", () => {
    expect(regexify("term", LANGS.EN)).toEqual(/\bterm/i);
  });

  test("should regexify a jp token", () => {
    expect(regexify("ワード", LANGS.JP)).toEqual(/ワード/i);
  });

  test("should regexify a en+jp token", () => {
    expect(regexify("プログラミングII", LANGS.JP)).toEqual(/プログラミングII/i);
  });
});

describe(">>>UTILS --- getCourseTitleAndInstructor", () => {
  const dummyCourse = {
    title: "Advanced Calculus",
    title_jp: "解析学入門",
    instructor: "TANAKA, Kazunaga",
    instructor_jp: "田中 和永"
  };
  test("should return a en title and instructor given a en searchLang", () => {
    expect(getCourseTitleAndInstructor(dummyCourse, LANGS.EN)).toEqual({
      title: "Advanced Calculus",
      instructor: "TANAKA, Kazunaga"
    });
  });

  test("should return a jp title and instructor given a jp searchLang", () => {
    expect(getCourseTitleAndInstructor(dummyCourse, LANGS.JP)).toEqual({
      title: "解析学入門",
      instructor: "田中 和永"
    });
  });
});

describe(">>>UTILS --- searchCourses", () => {
  const dummyCourses = [
    {
      title: "Advanced Calculus",
      title_jp: "解析学入門",
      instructor: "TANAKA, Kazunaga",
      instructor_jp: "田中 和永"
    },
    {
      title: "Advanced Chinese II fall semester-Wed-5 Nagatomi",
      title_jp: "中国語上級II 秋期水5永冨",
      instructor: "NAGATOMI, Seiji",
      instructor_jp: "永冨 青地"
    }
  ];

  test("should search a course given one en partial title", () => {
    expect(searchCourses("chi", dummyCourses, LANGS.EN)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given multiple en partial title", () => {
    expect(searchCourses("adv chi", dummyCourses, LANGS.EN)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given its jp partial title", () => {
    expect(searchCourses("上", dummyCourses, LANGS.JP)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });

  test("should search a course given its jp partial title", () => {
    expect(searchCourses("中国　秋期", dummyCourses, LANGS.JP)).toEqual(
      dummyCourses.slice(1, 2)
    );
  });
});

describe(">>>UTILS --- sortCourses", () => {
  const dummyCourses = [
    {
      title: "Advanced Calculus",
      title_jp: "解析学入門",
      instructor: "TANAKA, Kazunaga",
      instructor_jp: "田中 和永"
    },
    {
      title: "Advanced Chinese II fall semester-Wed-5 Nagatomi",
      title_jp: "中国語上級II 秋期水5永冨",
      instructor: "NAGATOMI, Seiji",
      instructor_jp: "永冨 青地"
    },
    {
      title: "Beginners Chinese IA spring semester-Fri-1 Hara",
      title_jp: "中国語初級IA 春期金1原",
      instructor: "HARA, Shintaro Alexandre",
      instructor_jp: "原 信太郎 アレシャンドレ"
    }
  ];

  const dummyEnCourses = [
    {
      title: "Advanced Calculus",
      instructor: "TANAKA, Kazunaga"
    },
    {
      title: "Calculus A",
      instructor: "BOWEN, Mark"
    },
    {
      title: "Advanced Macroeconomics A 01",
      instructor: "UEDA, Kozo"
    }
  ];

  const dummyJpCourses = [
    {
      title_jp: "保険数学",
      instructor_jp: "内藤 和晃"
    },
    {
      title_jp: "量子力学特論",
      instructor_jp: "山中 由也"
    },
    {
      title_jp: "中国語上級II 秋期水5永冨",
      instructor_jp: "永冨 青地"
    }
  ];

  test("should prioritize en title > instructor > no match", () => {
    expect(sortCourses("ma", dummyEnCourses, LANGS.EN)).toEqual([
      dummyEnCourses[2],
      dummyEnCourses[1],
      dummyEnCourses[0]
    ]);
  });

  test("should prioritize jp title > instructor > no match", () => {
    expect(sortCourses("中", dummyJpCourses, LANGS.JP)).toEqual([
      dummyJpCourses[2],
      dummyJpCourses[1],
      dummyJpCourses[0]
    ]);
  });
});
