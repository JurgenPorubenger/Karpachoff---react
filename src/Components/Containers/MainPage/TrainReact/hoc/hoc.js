import React from 'react';
import fetchInfo from '../Fetch/fetch';

// Эта функция принимает компонент...
// eslint-disable-next-line no-unused-vars
export default function withSubscription(WrappedComponent, selectData) {
  // ...и возвращает другой компонент...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    async componentDidMount() {
      // await fetchInfo(this.props.url).then((items) => this.setState({ data: items }));
      this.setState({
        data: await selectData(fetchInfo, this.props.url),
      });
      console.log(this.props);
      // ...который подписывается на оповещения...
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    // handleChange() {
    //   this.setState({
    //     data: selectData(fetchInfo, this.props.url),
    //   });
    // }

    render() {
      // ... и рендерит оборачиваемый компонент со свежи  ми данными!
      // Обратите внимание, что мы передаём остальные пропсы
      return <WrappedComponent data={this.state.data} />;
    }
  };
}
