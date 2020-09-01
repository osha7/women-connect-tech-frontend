import React from 'react';

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
          <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
          {touched && error && <span>{error}</span>}
    </div>
  );
  
export default renderDatePicker;
  