import { dateUtils } from '@/commons/date-utils/date-utils.js';

const INVALIDE_DATE = null;

describe('DateUtils', () => {
  test('year()는 주어진 날짜의 연도를 반환', () => {
    const year = dateUtils('2023-01-01').year();
    expect(year).toBe(2023);
  });
  test('month()는 주어진 날짜의 월을 반환', () => {
    const month1 = dateUtils('2023-01-01').month();
    expect(month1).toBe(0); // 1월은 0으로 반환
    const month2 = dateUtils('2023-02-01').month();
    expect(month2).toBe(1); // 2월은 1으로 반환
  });
  test('date()는 주어진 날짜의 일을 반환', () => {
    const date = dateUtils('2023-01-01').date();
    expect(date).toBe(1);
  });
  test('day()는 주어진 날짜의 요일을 반환', () => {
    const day1 = dateUtils('2023-01-01').day();
    expect(day1).toBe(0); // 일요일은 0
    const day2 = dateUtils('2023-01-02').day();
    expect(day2).toBe(1); // 월요일은 1
  });
  test('hour()는 주어진 날짜의 시간을 반환', () => {
    const hour = dateUtils('2023-01-01 13:00').hour();
    expect(hour).toBe(13);
  });
  test('minute()는 주어진 날짜의 분을 반환', () => {
    const minute = dateUtils('2023-01-01 13:15').minute();
    expect(minute).toBe(15);
  });
  test('second()는 주어진 날짜의 초를 반환', () => {
    const second = dateUtils('2023-01-01 13:15:25').second();
    expect(second).toBe(25);
  });
  test('millisecond()는 주어진 날짜의 밀리초를 반환', () => {
    const millisecond = dateUtils('2023-01-01 13:15:25.123').millisecond();
    expect(millisecond).toBe(123);
  });
  test('valueOf()는 주어진 날짜의 타임스탬프 값을 반환', () => {
    expect(dateUtils('2023-01-01').valueOf()).toBe(1672498800000);
    expect(dateUtils('2023-01-01').unix()).toBe(1672498800);
  });
  test('날짜를 주면, 그 날짜의 월의 일 수를 반환', () => {
    expect(dateUtils('2023-01-01').daysInMonth()).toBe(31);
  });
  test('set()는 주어진 날짜의 특정 단위를 설정한 값을 반환', () => {
    const newDate = dateUtils('2023-01-01').set('year', 2020);
    expect(newDate.year()).toBe(2020);
  });
  test('get()는 주어진 날짜의 특정 단위 값을 가져온다', () => {
    const year = dateUtils('2023-01-01').get('year');
    expect(year).toBe(2023);
  });
  test('add()는 주어진 날짜에 특정 단위만큼 시간을 더한 값을 반환', () => {
    const newDate = dateUtils('2023-01-01').add(1, 'year');
    expect(newDate.year()).toBe(2024);
  });
  test('subtract()는 주어진 날짜에서 특정 단위만큼 시간을 뺀 값을 반환', () => {
    const newDate = dateUtils('2023-01-01').subtract(1, 'year');
    expect(newDate.year()).toBe(2022);
  });
  test('startOf()는 주어진 날짜의 특정 단위의 시작 시간을 반환', () => {
    const startOfMonth = dateUtils('2023-03-02').startOf('month');
    expect(startOfMonth).toEqual(dateUtils('2023-03-01'));
  });
  test('endOf()는 주어진 날짜의 특정 단위의 끝 시간을 반환', () => {
    const endOfMonth = dateUtils('2023-01-03').endOf('month');
    expect(endOfMonth.month() + 1).toBe(1);
    expect(endOfMonth.get('D')).toBe(31);
  });
  test('format()는 주어진 날짜를 특정 포맷으로 문자열로 반환', () => {
    const formattedDate = dateUtils('2023-01-01').format('YYYY-MM-DD HH:mm:ss');
    expect(formattedDate).toBe('2023-01-01 00:00:00');
  });
  test('diff()는 두 날짜의 차이를 특정 단위로 반환', () => {
    const diff = dateUtils('2023-01-02').diff('2023-01-01', 'day');
    expect(diff).toBe(1);
  });
  test('diff()는 두 날짜 중 하나라도 잘못된 날짜라면 NaN 반환', () => {
    const diff1 = dateUtils(INVALIDE_DATE).diff(INVALIDE_DATE, 'day');
    expect(diff1).toBe(NaN);
    const diff2 = dateUtils(INVALIDE_DATE).diff(undefined, 'day');
    expect(diff2).toBe(NaN);
    const diff3 = dateUtils(undefined).diff(INVALIDE_DATE, 'day');
    expect(diff3).toBe(NaN);
    const diff4 = dateUtils('2023-01-01').diff(INVALIDE_DATE, 'day');
    expect(diff4).toBe(NaN);
  });
  test('`DateUtils`객체를 형식에 맞는 문자열 또는 JSON으로 변환', () => {
    expect(dateUtils('2023-01-01').toJSON()).toBe('2022-12-31T15:00:00.000Z');
    expect(dateUtils('2023-01-01').toISOString()).toBe('2022-12-31T15:00:00.000Z');
    expect(dateUtils('2023-01-01').toString()).toBe('Sat, 31 Dec 2022 15:00:00 GMT');
  });
  test('isValid()는 날짜가 올바른 날짜 포맷인지 여부를 반환', () => {
    const validDate = dateUtils('2023-01-01').toDate();
    const invalidDate = dateUtils('Fail').toDate();
    expect(dateUtils(validDate).isValid()).toBe(true);
    expect(dateUtils(invalidDate).isValid()).toBe(false);
  });
  test('시간대를 UTC로 바꾸거나 Offset을 구할 수 있다', () => {
    expect(dateUtils('2023-01-01').format()).toBe('2023-01-01T00:00:00+09:00');
    expect(dateUtils('2023-01-01').utc().format()).toBe('2022-12-31T15:00:00Z');
    expect(dateUtils('2023-01-01').utcOffset()).toBe(540);
  });
  test('잘못된 문자열 입력 시 Invalid Date 반환', () => {
    const invalidDate = dateUtils('잘못된 날짜').toDate();
    expect(dateUtils(invalidDate).isValid()).toBe(false);
  });
  test('undefined 입력 시 현재 날짜 반환', () => {
    const dateFromUndefined = dateUtils(undefined).toDate();
    expect(dateUtils(dateFromUndefined).isValid()).toBe(true);
  });
  test('null 입력 시 Invalid Date 반환', () => {
    const dateFromNull = dateUtils(null).toDate();
    expect(dateUtils(dateFromNull).isValid()).not.toBeUndefined();
    expect(dateUtils(dateFromNull).isValid()).toBe(false);
  });
  test('현재 날짜가 오늘이면 true, 오늘이 아니면 false', () => {
    const thisisToday = dateUtils().isToday();
    expect(thisisToday).toBe(true);
    const thisisNotToday = dateUtils().add(1, 'day').isToday();
    expect(thisisNotToday).toBe(false);
  });
  test('인자로 전달한 날짜보다 이전인지, 같은지, 이후인지 판단할 수 있다', () => {
    expect(dateUtils('2023-01-01').isBefore('2023-01-02', 'day')).toBe(true);
    expect(dateUtils('2023-01-01').isSame('2023-01-01', 'day')).toBe(true);
    expect(dateUtils('2023-01-01').isAfter('2023-01-02', 'day')).toBe(false);
  });

  test('인자로 전달한 날짜가 오늘 기준으로 어제인지 내일인지 판단할 수 있다', () => {
    expect(dateUtils().subtract(1, 'day').isYesterday()).toBe(true);
    expect(dateUtils().add(1, 'day').isYesterday()).toBe(false);

    expect(dateUtils().add(1, 'day').isTomorrow()).toBe(true);
    expect(dateUtils().subtract(1, 'day').isTomorrow()).toBe(false);
  });
});
