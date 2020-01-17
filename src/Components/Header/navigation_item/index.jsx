import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';
import iconEnter from '../../../static/icons/Group.svg';


function NavItem({ data }) {
  const { main, router } = data;
  if (router === '/enter') {
    return (
      <Link to={router} className="item">
        <img src={iconEnter} alt="" />
        <li>
          {main}
        </li>
      </Link>
    );
  }
  return (
    <Link to={router} className="item">
      <li>
        {main}
      </li>
    </Link>
  );
}
NavItem.defaultProps = {
};
NavItem.propTypes = {
};

export default NavItem;
