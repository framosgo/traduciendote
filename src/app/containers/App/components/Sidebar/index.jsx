import React, { Component } from 'react';

import styles from './styles';

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
