import React, { Component } from 'react';
import MenuItem from '../commons/MenuItem';
import SubMenu from '../SubMenu';
import Brand from '../commons/Brand';
import Icon from '../Icon';
import Menu from '../Menu';
import CollapseButton from './CollapseButton';
import ArrowIcon from './ArrowIcon';
import Slide from './Slide';
import Anchor from './Anchor';

/**
 * Sidebar/Menu Component
 * @extends Component
 */
class Sidebar extends Component {
  render() {
    return (
      <Slide collapsed={this.props.sidebarIsCollapsed}>
        <Brand>mern boilerplate</Brand>
        <Menu>
          <MenuItem active collapsed={this.props.sidebarIsCollapsed}>
            <Icon type="home" />
            {this.props.sidebarIsCollapsed ? null : (
              <span style={{ marginLeft: '15px' }}>
                <Anchor to="/dashboard">Home</Anchor>
              </span>
            )}
          </MenuItem>
          <SubMenu
            collapsed={this.props.sidebarIsCollapsed}
            main={{
              icon: 'user',
              title: 'User'
            }}
            items={[
              { name: 'Profile', uri: '/user/profile' },
              { name: 'Settings', uri: '/user/settings' }
            ]}
          />
          <MenuItem collapsed={this.props.sidebarIsCollapsed}>
            <Icon type="sign-out" />
            {this.props.sidebarIsCollapsed ? null : (
              <span style={{ marginLeft: '15px' }}>
                <Anchor to="/logout">Logout</Anchor>
              </span>
            )}
          </MenuItem>
        </Menu>
        <CollapseButton onClick={this.props.collapseSidebar}>
          <ArrowIcon className="fa fa-chevron-right" collapsed={this.props.sidebarIsCollapsed} />
        </CollapseButton>
      </Slide>
    );
  }
}

export default Sidebar;
