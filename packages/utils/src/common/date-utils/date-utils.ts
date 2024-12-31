import type {
  DayjsConfigType,
  DayjsManipulateType,
  DayjsOpUnitType,
  DayjsQUnitType,
  DayjsType,
  DayjsUnitTypeLong,
  DayjsUnitTypeLongPlural,
  DayjsUnitTypeShort,
} from '@/common/date-utils/dayjs.js';
import { dayjs } from '@/common/date-utils/dayjs.js';

/**
 * ### `dateUtils`
 *
 * 날짜 utils 함수
 *
 * `dayjs`사용법을 모방
 *
 * @example
 * const obj1 = dateUtils();
 * const obj2 = dateUtils(new Date());
 * const obj3 = dateUtils('2023-01-01');
 */
export const dateUtils = (date?: ConfigType) => {
  return new DateUtils(date);
};

/**
 * ### `FormatDate`
 *
 * 날짜 utils 포맷 상수
 */
export const FormatDate = {
  /** 연-월-일 (대시 구분) (2023-10-01) */
  'YYYY-MM-DD': 'YYYY-MM-DD',
  /** 연-월-일 (점 구분) (2023.10.01) */
  'YYYY.MM.DD': 'YYYY.MM.DD',
  /** 연-월-일 시:분:초 (2023-10-01 12:34:56) */
  'YYYY-MM-DD HH:mm:ss': 'YYYY-MM-DD HH:mm:ss',
  /** 연도 (4자리) (2023) */
  YYYY: 'YYYY',
  /** 연-월 (대시 구분) (2023-10) */
  'YYYY-MM': 'YYYY-MM',
  /** 연-월 (점 구분) (2023.10) */
  'YYYY.MM': 'YYYY.MM',
  /** 연도 두 자리-월 (대시 구분) (23-10) */
  'YY-MM': 'YY-MM',
  /** 연도 두 자리-월 (점 구분) (23.10) */
  'YY.MM': 'YY.MM',
  /** 월-일 (대시 구분) (10-01) */
  'MM-DD': 'MM-DD',
  /** 시:분:초 (12:34:56) */
  'HH:mm:ss': 'HH:mm:ss',
  /** 시:분 (12:34) */
  'HH:mm': 'HH:mm',
  /** 요일 (전체 이름) (Sunday) */
  dddd: 'dddd',
  /** 요일 (짧은 이름) (Sun) */
  ddd: 'ddd',
  /** 요일 (숫자, 0=일요일) (0) */
  d: 'd',
  /** 월 (전체 이름) (October) */
  MMMM: 'MMMM',
  /** 월 (짧은 이름) (Oct) */
  MMM: 'MMM',
  /** 월 (숫자) (10) */
  M: 'M',
  /** 일 (숫자) (1) */
  D: 'D',
  /** 시간 (24시간제) (12) */
  H: 'H',
  /** 분 (34) */
  m: 'm',
  /** 초 (56) */
  s: 's',
} as const;

/**
 * ### `FormatDate`
 *
 * 날짜 utils 포맷 상수
 */
export type FormatDate = (typeof FormatDate)[keyof typeof FormatDate];

/**
 * ### `ConfigType`
 *
 * `dateUtils` Config 타입
 */
export type ConfigType = string | number | Date | null | undefined | DateUtils;

/**
 * ### `UnitTypeShort`
 *
 * `dateUtils` 단위(unit)의 짧은 형태 타입
 */
export type UnitTypeShort = DayjsUnitTypeShort;

/**
 * ### `UnitTypeLong`
 *
 * `dateUtils` 단위(unit)의 긴 형태 타입
 */
export type UnitTypeLong = DayjsUnitTypeLong;

/**
 * ### `UnitTypeLongPlural`
 *
 * `dateUtils` 단위(unit)의 긴 복수 형태를 나타내는 타입 (예: 'years', 'months', 'days')
 */
export type UnitTypeLongPlural = DayjsUnitTypeLongPlural;

/**
 * ### `UnitType`
 *
 * `dateUtils` 날짜와 시간 단위(unit) 타입
 */
export type UnitType = UnitTypeLong | UnitTypeLongPlural | UnitTypeShort;

/**
 * ### `OpUnitType`
 *
 * `dateUtils` 날짜 주말 조작 시 사용되는 단위(unit) 타입
 */
export type OpUnitType = DayjsOpUnitType;

/**
 * ### `QUnitType`
 *
 * `dateUtils` 분기를 포함한 단위(unit) 타입
 */
export type QUnitType = DayjsQUnitType;

/**
 * ### `ManipulateType`
 *
 * `dateUtils` 날짜를 조작 시 사용하는 단위(unit) 타입
 */
export type ManipulateType = DayjsManipulateType;

/**
 * ### `DateUtils`
 *
 * 날짜 유틸 클래스
 */
class DateUtils {
  #dateUtils: DayjsType;

  constructor(date?: ConfigType) {
    this.#dateUtils = dayjs(date as unknown as DayjsType);
  }
  /** 주어진 날짜의 연도를 반환
   *
   * @example
   * dateUtils('2023-01-01').year(); // => 2023
   */
  year() {
    return this.#dateUtils.year();
  }
  /** 주어진 날짜의 월을 반환
   *
   * @example
   * dateUtils('2023-01-01').month(); // => 0 (1월)
   */
  month() {
    return this.#dateUtils.month();
  }
  /** 주어진 날짜의 일을 반환
   *
   * @example
   * dateUtils('2023-01-01').date(); // => 1
   */
  date() {
    return this.#dateUtils.date();
  }
  /** 주어진 날짜의 요일을 반환
   *
   * @example
   * dateUtils('2023-01-01').day(); // => 0 (일요일)
   */
  day() {
    return this.#dateUtils.day();
  }
  /** 주어진 날짜의 시간을 반환
   *
   * @example
   * dateUtils('2023-01-01 13:00').hour(); // => 13
   */
  hour() {
    return this.#dateUtils.hour();
  }
  /** 주어진 날짜의 분을 반환
   *
   * @example
   * dateUtils('2023-01-01 13:15').minute(); // => 15
   */
  minute() {
    return this.#dateUtils.minute();
  }
  /** 주어진 날짜의 초를 반환
   *
   * @example
   * dateUtils('2023-01-01 13:15:25').second(); // => 25
   */
  second() {
    return this.#dateUtils.second();
  }
  /** 주어진 날짜의 밀리초를 반환
   *
   * @example
   * dateUtils('2023-01-01 13:15:25.123').millisecond(); // => 123
   */
  millisecond() {
    return this.#dateUtils.millisecond();
  }
  /** 주어진 날짜의 특정 단위를 설정한 값을 반환
   *
   * @example
   * dateUtils('2023-01-01').set('year', 2020); // => 2020-01-01의 Date 객체
   */
  set(unit: UnitType, value: number) {
    this.#dateUtils = this.#dateUtils.set(unit, value);
    return this;
  }
  /** 주어진 날짜의 특정 단위 값을 가져옴
   *
   * @example
   * dateUtils('2023-01-01').get('year'); // => 2023
   */
  get(unit: UnitType) {
    return this.#dateUtils.get(unit);
  }
  /** 주어진 날짜에 특정 단위만큼 시간을 더한 값을 반환
   *
   * @example
   * dateUtils('2023-01-01').add(1, 'year'); // => 2024-01-01의 Date 객체
   */
  add(value: number, unit: ManipulateType) {
    this.#dateUtils = this.#dateUtils.add(value, unit);
    return this;
  }
  /** 주어진 날짜에서 특정 단위만큼 시간을 뺀 값을 반환
   *
   * @example
   * dateUtils('2023-01-01').subtract(1, 'year'); // => 2022-01-01의 Date 객체
   */
  subtract(value: number, unit: ManipulateType) {
    this.#dateUtils = this.#dateUtils.subtract(value, unit);
    return this;
  }
  /** 주어진 날짜의 특정 단위의 시작 시간을 반환
   *
   * @example
   * dateUtils('2023-01-01').startOf('month'); // => 2023-01-01 00:00:00의 Date 객체
   */
  startOf(unit: OpUnitType) {
    this.#dateUtils = this.#dateUtils.startOf(unit);
    return this;
  }
  /** 주어진 날짜의 특정 단위의 끝 시간을 반환
   *
   * @example
   * dateUtils('2023-01-01').endOf('month'); // => 2023-01-31 23:59:59의 Date 객체
   */
  endOf(unit: OpUnitType) {
    this.#dateUtils = this.#dateUtils.endOf(unit);
    return this;
  }
  /** 주어진 날짜를 특정 포맷으로 문자열로 반환
   *
   * @example
   * dateUtils('2023-01-01').format('YYYY-MM-DD'); // => '2023-01-01'
   */
  format(template?: FormatDate) {
    return this.#dateUtils.format(template);
  }
  /** 두 날짜의 차이를 특정 단위로 반환
   *
   * @example
   * dateUtils('2023-01-02').diff('2023-01-01', 'day'); // => 1
   */
  diff(date: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean) {
    return this.#dateUtils.diff(date as DayjsConfigType, unit, float);
  }
  /** 주어진 날짜의 타임스탬프 값을 반환
   *
   * @example
   * dateUtils('2023-01-01').valueOf(); // => 1672531200000
   */
  valueOf() {
    return this.#dateUtils.valueOf();
  }
  /** 주어진 날짜의 유닉스 타임스탬프를 반환
   *
   * @example
   * dateUtils('2023-01-01').unix(); // => 1672531200
   */
  unix() {
    return this.#dateUtils.unix();
  }
  /** 주어진 날짜의 해당 월의 일 수를 반환
   *
   * @example
   * dateUtils('2023-02-01').daysInMonth(); // => 28
   */
  daysInMonth() {
    return this.#dateUtils.daysInMonth();
  }
  /** 주어진 날짜를 Date 객체로 반환
   *
   * @example
   * dateUtils('2023-01-01').toDate(); // => 2023-01-01의 Date 객체
   */
  toDate() {
    return this.#dateUtils.toDate();
  }
  /** 주어진 날짜를 JSON 포맷의 문자열로 반환
   *
   * @example
   * dateUtils('2023-01-01').toJSON(); // => '"2023-01-01T00:00:00.000Z"'
   */
  toJSON() {
    return this.#dateUtils.toJSON();
  }
  /** 주어진 날짜를 ISO 8601 포맷의 문자열로 반환
   *
   * @example
   * dateUtils('2023-01-01').toISOString(); // => '2023-01-01T00:00:00.000Z'
   */
  toISOString() {
    return this.#dateUtils.toISOString();
  }
  /**
   * 주어진 날짜를 문자열로 반환
   *
   * @example
   * dateUtils('2023-01-01').toString(); // => 'Sun Jan 01 2023'
   */
  toString() {
    return this.#dateUtils.toString();
  }
  /**
   * 주어진 날짜를 utc 날짜로 변경
   *
   * @example
   * dateUtils('2023-01-01').utc(); // => 2023-01-01T00:00:00.000Z의 Date 객체
   */
  utc() {
    this.#dateUtils = this.#dateUtils.utc();
    return this;
  }
  /** 주어진 날짜의 UTC 오프셋을 반환
   *
   * @example
   * dateUtils('2023-01-01').utcOffset(); // => -480 (분 단위)
   */
  utcOffset() {
    return this.#dateUtils.utcOffset();
  }
  /** 두 날짜가 주어진 단위로 비교했을 때, 첫 번째 날짜가 더 이전인지 반환
   *
   * @example
   * dateUtils('2023-01-01').isBefore('2023-01-02', 'day'); // => true
   */
  isBefore(date: ConfigType, unit?: OpUnitType) {
    return this.#dateUtils.isBefore(date as DayjsConfigType, unit);
  }
  /** 두 날짜가 주어진 단위로 비교했을 때, 같은지 반환
   *
   * @example
   * dateUtils('2023-01-01').isSame('2023-01-01', 'day'); // => true
   */
  isSame(date: ConfigType, unit?: OpUnitType) {
    return this.#dateUtils.isSame(date as DayjsConfigType, unit);
  }
  /** 두 날짜가 주어진 단위로 비교했을 때, 첫 번째 날짜가 더 이후인지 반환
   *
   * @example
   * dateUtils('2023-01-02').isAfter('2023-01-01', 'day'); // => true
   */
  isAfter(date: ConfigType, unit?: OpUnitType) {
    return this.#dateUtils.isAfter(date as DayjsConfigType, unit);
  }
  /** 날짜가 올바른 날짜 포맷인지 여부 반환
   *
   * @example
   * const date1 = dateUtils('Fail').toDate(); // => Invalid Date
   * dateUtils(date1).isValid(); // => false
   *
   * const date2 = dateUtils('Fail').year(); // => NaN
   * dateUtils(date2).isValid(); // => false
   */
  isValid() {
    return this.#dateUtils.isValid();
  }
  /**
   * 날짜가 오늘인지 여부 리턴
   *
   * @example
   * const isToday = dateUtils().isToday(); // => true
   */
  isToday() {
    return this.#dateUtils.isToday();
  }
  /**
   * 날짜가 내일인지 여부 리턴
   *
   * @example
   * const isTomorrow = dateUtils('2023-01-02').isTomorrow(); // => true
   */
  isTomorrow() {
    return this.#dateUtils.isTomorrow();
  }
  /**
   * 날짜가 어제인지 여부 리턴
   *
   * @example
   * const isYesterday = dateUtils('2023-01-01').isYesterday(); // => true
   */
  isYesterday() {
    return this.#dateUtils.isYesterday();
  }
}
