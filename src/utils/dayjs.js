import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(duration);

function formatEventDuration (endTime, startTime) {
  const difference = Math.abs(dayjs(endTime).diff(dayjs(startTime)));
  const formatterDifference = dayjs.duration(difference).format('MM[M] DD[D] HH[H] mm[M]');
  return formatterDifference.split(' ').filter((part) => !/00\w/.test(part)).join(' ');
}

function formatEventDate (date) {
  const [month, day] = dayjs(date).format('MMM DD').split(' ');
  return `${month.toUpperCase()} ${day}`;
}

function formatEventDatetime (date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function formatEventFromToDate (date) {
  return dayjs(date).format('HH:mm');
}

export { formatEventDuration, formatEventDate, formatEventDatetime, formatEventFromToDate };
