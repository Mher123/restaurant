import { Menu } from 'antd';
import './TopBar.scss';
import React from 'react';

class TopBar extends React.Component {
  state = {
    current: 'dishes',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="top__bar">
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <img className="logo" src="./assets/images/logo_symbol.png" alt=""/> 
          <Menu.Item key="dishes">
            Dishes
          </Menu.Item>
          <Menu.Item key="drinks">
            Drinks
          </Menu.Item>
          <Menu.Item key="add-ons">
            Add-ons
          </Menu.Item>
          <Menu.Item key="archive">
            Archive
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TopBar;