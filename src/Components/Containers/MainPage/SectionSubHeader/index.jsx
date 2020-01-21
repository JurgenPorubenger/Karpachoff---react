import React from 'react';
import './index.scss';
import ProgressBar from './ProgressBar/index';


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
    return (
      <div className="sub_header">
        <div className="main_block">
          <div className="article"><h1>1 год, 3-ий месяц</h1></div>
        </div>
        <div className="container">
          <div className="main_info">
            <div className="text">
              <p>
                {/* eslint-disable-next-line max-len */}
                  Прохождение этой темы позволит вам избежать частных ошибок при воспитании детей от 0 до 3 лет.
                  Результат - правильные и четкие шаги для достижения цели.
              </p>
            </div>
            <ProgressBar />
            <h3>Название актуальной темы</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default SubHeader;
