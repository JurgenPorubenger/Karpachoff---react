import React from 'react';
import axiosHTTP from '../Fetch/fetch';

// Эта функция принимает компонент...
// eslint-disable-next-line no-unused-vars
export default function withSubscription(WrappedComponent, selectData) {
  // ...и возвращает другой компонент...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      console.log(this.state.data);
      // ...который подписывается на оповещения...
      // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(axiosHTTP, this.props.url),
      });
    }

    render() {
      console.log(`${this.state.data}Wrapped`);
      // ... и рендерит оборачиваемый компонент со свежи  ми данными!
      // Обратите внимание, что мы передаём остальные пропсы
      return <WrappedComponent data={this.state.data} />;
    }
  };
}
