import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import isYesterday from 'dayjs/plugin/isYesterday.js';
import isTomorrow from 'dayjs/plugin/isTomorrow.js';
import isToday from 'dayjs/plugin/isToday.js';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import isBetween from 'dayjs/plugin/isBetween.js';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';

export type {
  ManipulateType as DayjsManipulateType,
  OpUnitType as DayjsOpUnitType,
  QUnitType as DayjsQUnitType,
  UnitTypeLong as DayjsUnitTypeLong,
  UnitTypeLongPlural as DayjsUnitTypeLongPlural,
  UnitTypeShort as DayjsUnitTypeShort,
  ConfigType as DayjsConfigType,
  Dayjs as DayjsType,
} from 'dayjs';

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);
dayjs.extend(utc);
dayjs.extend(timezone);

const dayjsIncludePluginExtends = dayjs;
export { dayjsIncludePluginExtends as dayjs };
