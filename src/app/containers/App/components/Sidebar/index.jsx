import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes/routes';
import Accordion from 'components/Accordion';

import styles from './styles';

const activeStyle = {
  fontWeight: 'bold',
  color: 'rgb(0, 122, 255)'
};

class Sidebar extends Component {
  state = {
    isOpen: true
  };

  toogle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const iconClass = isOpen ? styles.chevronLeft : styles.chevronRight;
    const navClass = isOpen ? '' : styles.navCollapsed;
    const leches;
    return (
      <nav className={ navClass }>
        <div className={ styles.collapserIcon } onClick={ this.toogle }>
          <div className={ iconClass } />
          <div className={ iconClass } />
        </div>
  
      </nav>
    );
  }
}

export default Sidebar;
