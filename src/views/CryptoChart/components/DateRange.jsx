import React from 'react';
import Button from './Button';
import './DateRange.css'
/**
* @function DateRange
* @description React component that renders buttons and custom date form to change time range.
*/

const DateRange = (props) => {
  // map over labels array to create date range buttons
  const labels = ['1d', '7d', '1m', '1y'];
  const buttons = labels.map(label => (
    <Button
      key={label}
      className={props.className}
      clickHandler={props.clickHandler}
      label={label}
      activeBtn={props.activeBtn}
    />
  ));
  return (
    <div className='date_container'>
      <div>
        {buttons}
      </div>
      <form className='date_form'>
        <div className='date_customDate'>
          <label htmlFor="startDate" className='date_label'>From:</label>
          <input type="date" value={props.startDate} onChange={props.changeStartDate} />
        </div>
        <div className='date_customDate'>
          <label htmlFor="endDate" className='date_label'>To:</label>
          <input type="date" value={props.endDate} onChange={props.changeEndDate} />
        </div>
      </form>
    </div>
  );
};

export default DateRange;
