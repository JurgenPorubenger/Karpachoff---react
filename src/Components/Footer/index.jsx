import React from 'react';
import './index.scss';


class Footer extends React.Component {
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
      <div className="main_footer">Footer</div>
    );
  }
}
export default Footer;
