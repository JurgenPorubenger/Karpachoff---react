import React from 'react';

// eslint-disable-next-line react/prop-types
export default function (props) {
  return <div>{props.data.map((el) => el.name)}</div>;
}
