import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';


class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="bg_gray">
        <div className="container">
          <ul className="breadcrumb">
            <li><Link to="/main">Главная</Link></li>
            <li><Link to="/">Академия родительского мастерства</Link></li>
            <li className="active">Модуль 12</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default BreadCrumb;
