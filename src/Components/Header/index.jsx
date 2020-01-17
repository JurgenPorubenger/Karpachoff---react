import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './index.scss';
import mySvg from './logo/Слой 1.svg';
import NavItem from './navigation_item/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav:
                [
                  {
                    main: 'Главная',
                    router: '/main',
                  },
                  {
                    main: 'Материалы для вас',
                    router: '/materials',
                  },
                  {
                    main: 'Календарь курсов',
                    router: '/calendar',
                  },
                  {
                    main: 'Войти',
                    router: '/enter',
                  },

                ],
    };
  }

  componentDidMount() {
    console.log('didmount');
  }

  render() {
    console.log('render');
    const { nav } = this.state;
    return (
      <div className="main_navigation">
        <div className="container">
          <div className="logo">
            <Link to="/"><img src={mySvg} alt="/" /></Link>
          </div>
          <ul className="navigation">
            {nav.map((item, i) => (
              <NavItem
                data={item}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
