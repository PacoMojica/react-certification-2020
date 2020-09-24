import { LAPSE_SECONDS } from './constants';

/**
 * ISO 8601 Duration
 * 
 * P (for period) placed at the start of the duration representation.
 * Y year designator, follows the value for the number of years.
 * M month designator, follows the value for the number of months.
 * W week designator, follows the value for the number of weeks.
 * D day designator, follows the value for the number of days.
 * T time designator, precedes the time components of the representation.
 * H hour designator, follows the value for the number of hours.
 * M minute designator, follows the value for the number of minutes.
 * S second designator, follows the value for the number of seconds.
 */

const ISO_8601_DURATION = /P([0-9]*[.|,]?[0-9]+Y)?([0-9]*[.|,]?[0-9]+M)?([0-9]*[.|,]?[0-9]+W)?([0-9]*[.|,]?[0-9]+D)?T?([0-9]*[.|,]?[0-9]+H)?([0-9]*[.|,]?[0-9]+M)?([0-9]*[.|,]?[0-9]+S)?/;
const DESIGNATOR_MAP = {
  'Y0': 'year',
  'M1': 'month',
  'W2': 'week',
  'D3': 'day',
  'H4': 'hour',
  'M5': 'minute',
  'S6': 'second',
}
const output = {
  year: 0,
  month: 0,
  week: 0,
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
}

function getDurationDesignator(value = '') {
  const duration = Number(value.substr(0, value.length - 1));
  const designator = value[value.length - 1];
  return [duration, designator];
}

export function parse(durationString = '') {
  const values = durationString.match(ISO_8601_DURATION).slice(1);
  const result = values.reduce((output, value, index) => {
    if (!value) return output;

    const [duration, designator] = getDurationDesignator(value);
    const designatorKey = DESIGNATOR_MAP[`${designator}${index}`];

    return {
      ...output,
      [designatorKey]: duration,
    }
  }, output);
  return result;
}

export function toSeconds(durationString = '') {
  const values = parse(durationString);
  const totalSeconds = Object.entries(values).reduce(
    (secondsSum, [designator, duration]) => {
      const lapseSeconds = LAPSE_SECONDS[designator];
      const durationSeconds = duration * lapseSeconds;

      return secondsSum + durationSeconds;
    }, 0);

  return totalSeconds;
}

export function formatVideoDuration(durationString) {
  const totalSeconds = toSeconds(durationString);
  const hours = totalSeconds / LAPSE_SECONDS['hour'];
  const minutes = hours >= 1
    ? (totalSeconds % LAPSE_SECONDS['hour']) / LAPSE_SECONDS['minute']
    : totalSeconds / LAPSE_SECONDS['minute'];
  const seconds = minutes >= 1
    ? (totalSeconds % LAPSE_SECONDS['minute']) / LAPSE_SECONDS['second']
    : totalSeconds;

  let formatted = '';
  if (hours > 1) {
    formatted += `${Math.floor(hours).toString()}:`;
    formatted += `${Math.floor(minutes).toString().padStart(2, '0')}:`;
  } else {
    formatted += `${Math.floor(minutes).toString()}:`;
  }
  formatted += `${seconds.toString().padStart(2, '0')}`;

  return formatted;
}