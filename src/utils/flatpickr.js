import flatpickr from 'flatpickr';

function createDatePickers(startDateField, endDateField) {

  const options = {
    monthSelectorType: 'static',
    dateFormat: 'Z',
    altInput: true,
    altFormat: 'd/m/y H:i',
    locale: {firstDayOfWeek: 1},
    enableTime: true,
    'time_24hr': true
  };

  const startDatePicker = flatpickr(startDateField, options);
  const endDatePicker = flatpickr(endDateField, options);

  startDatePicker.set('onChange', (dates) => endDatePicker.set('minDate', dates.at(0)));
  endDatePicker.set('minDate', startDatePicker.selectedDates.at(0));

  return () => {
    startDatePicker.destroy();
    endDatePicker.destroy();
  };
}

export {createDatePickers};
