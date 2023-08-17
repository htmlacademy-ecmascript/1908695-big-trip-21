import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import utc from 'dayjs/plugin/utc';

dayjs.extend(duration);
dayjs.extend(utc);

function formatEventDuration (endTime, startTime) {
  const difference = Math.abs(dayjs.utc(endTime).diff(dayjs.utc(startTime)));
  const formatterDifference = dayjs.duration(difference).format('MM[M] DD[D] HH[H] mm[M]');
  return formatterDifference.split(' ').filter((part) => !/00\w/.test(part)).join(' ');
}

function formatEventDate (date) {
  const [month, day] = dayjs.utc(date).format('MMM DD').split(' ');
  return `${month.toUpperCase()} ${day}`;
}

function formatEventDatetime (date) {
  return dayjs.utc(date).format('YYYY-MM-DD');
}

function formatEventFromToDate (date) {
  return dayjs.utc(date).format('HH:mm');
}

export { formatEventDuration, formatEventDate, formatEventDatetime, formatEventFromToDate };
