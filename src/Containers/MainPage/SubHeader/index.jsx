import React from 'react';
import './index.scss';


class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('didmount');
  }

  render() {
    console.log('render');
    return (
      <div className="sub_header">
        <div className="container">
          <div className="main">d</div>
        </div>
      </div>
    );
  }
}
export default SubHeader;
