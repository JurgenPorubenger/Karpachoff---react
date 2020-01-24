import React, { useState, useEffect } from 'react';
import fetchInfo from '../Fetch/fetch';

// Эта функция принимает компонент...
// eslint-disable-next-line no-unused-vars
export default function withSubscription(WrappedComponent, selectData) {
  // ...и возвращает другой компонент...
  return (props) => {
    const [data, setData] = useState([]);
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    useEffect(async () => { setData(await selectData(fetchInfo, props.url)); }, props.url);
    // ... и рендерит оборачиваемый компонент со свежими данными!
    // Обратите внимание, что мы передаём остальные пропсы
    return <WrappedComponent data={data} {...props} />;
  };
}
