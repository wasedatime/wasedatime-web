import {
  tokenize,
  regexify,
  getCourseTitleAndInstructor,
  searchCourses,
  sortCourses
} from './courseSearch';

describe('>>>UTILS --- Test tokenize', () => {
  test('should tokenize en search terms by non en/number characters', () => {
    expect(tokenize(' search term \t123\t')).toEqual(['search', 'term', '123']);
  });

  test('should tokenize jp search terms by non jp/number characters', () => {
    expect(tokenize(' 検索 ワード \t123\t')).toEqual(['検索', 'ワード', '123']);
  });

  test('should tokenize en+jp search terms by non jp/number characters', () => {
    expect(tokenize("search\tterm'　検索%^&ワード  ")).toEqual([
      'search',
      'term',
      '検索',
      'ワード'
    ]);
  });
});

describe('>>>UTILS --- Test regexify', () => {
  test('should regexify a en token', () => {
    expect(regexify('term')).toEqual(/\bterm/i);
  });

  test('should regexify a jp token', () => {
    expect(regexify('ワード')).toEqual(/\bワード/i);
  });

  test('should regexify a en+jp token', () => {
    expect(regexify('プログラミングII')).toEqual(/\bプログラミングII/i);
  });
});

describe('>>>UTILS --- getCourseTitleAndInstructor', () => {
  const dummyCourse = {
    title: 'Advanced Calculus',
    title_jp: '解析学入門',
    instructor: 'TANAKA, Kazunaga',
    instructor_jp: '田中 和永'
  };
  test('should return a en title and instructor given a en searchLang', () => {
    expect(getCourseTitleAndInstructor(dummyCourse, 'en')).toEqual({
      title: 'Advanced Calculus',
      instructor: 'TANAKA, Kazunaga'
    });
  });

  test('should return a jp title and instructor given a jp searchLang', () => {
    expect(getCourseTitleAndInstructor(dummyCourse, 'jp')).toEqual({
      title: '解析学入門',
      instructor: '田中 和永'
    });
  });
});
