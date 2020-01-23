import React from 'react';
// Эта функция принимает компонент...
// eslint-disable-next-line no-unused-vars
export default function withSubscription(WrappedComponent, selectData) {
  // ...и возвращает другой компонент...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(props),
      };
    }

    componentDidMount() {
      // ...который подписывается на оповещения...
      // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        // data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... и рендерит оборачиваемый компонент со свежими данными!
      // Обратите внимание, что мы передаём остальные пропсы
      // eslint-disable-next-line react/jsx-filename-extension,react/destructuring-assignment,react/jsx-props-no-spreading
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
