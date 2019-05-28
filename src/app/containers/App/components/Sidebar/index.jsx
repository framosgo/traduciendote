import React, { Component } from 'react';

class Sidebar extends Component {
  state = {
    isOpen: true
  };

  render() {
    const { isOpen } = this.state;
    return <nav />;
  }
}

export default Sidebar;
