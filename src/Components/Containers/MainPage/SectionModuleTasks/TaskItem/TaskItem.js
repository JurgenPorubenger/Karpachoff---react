import React from 'react';
import './index.scss';

function TaskItem({ modules }) {
  const { num, checked, text } = modules;
  return (
    <div className="TaskItem">
      <div>{num}</div>
      <div>{text}</div>
      <img src="../../../../static/icons/CheckboxRectangle.svg" alt="" />
    </div>
  );
}

export default TaskItem;
