import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../../commons/MenuItem';
import Icon from '../Icon';
import MainMenuItem from './MainMenuItem';
import Title from './Title';
import ArrowIcon from './ArrowIcon';
import SubList from './SubList';
import Anchor from './Anchor';

const propTypes = {
  main: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  collapsed: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

/**
 * Takes list of items, return DropDown Menu.
 * @extends Component
 */
class SubMenu extends Component {
  state = {
    menuCollapsed: false
  };

  handleCollapse = () => {
    const menuCollapsed = !this.state.menuCollapsed;
    this.setState({ menuCollapsed });
  };

  render() {
    return (
      <div>
        <MainMenuItem
          sidebarIsCollapsed
          collapsed={this.state.menuCollapsed}
          onClick={this.handleCollapse}
        >
          <Icon type={this.props.main.icon} />
          {this.props.collapsed ? null : <Title>{this.props.main.title}</Title>}
          {this.props.collapsed ? null : (
            <ArrowIcon className="fa fa-chevron-right" collapsed={this.state.collapsed} />
          )}
        </MainMenuItem>
        {this.state.menuCollapsed ? (
          <SubList collapsed={this.state.menuCollapsed} menuCollapsed={this.props.collapsed}>
            {this.props.items.map((item, i) => (
              <MenuItem key={i} style={{ paddingLeft: '25px' }}>
                <Anchor to={item.uri}>{item.name}</Anchor>
              </MenuItem>
            ))}
          </SubList>
        ) : null}
      </div>
    );
  }
}

SubMenu.propTypes = propTypes;

export default SubMenu;
