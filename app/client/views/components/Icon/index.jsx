import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired
};

/**
 * Takes a FontAwesome Icon name and returns a Icon.
 * @param {string} type FontAwesome Icon name
 * @param {object} rest rest operator, pass all other props to children
 */
const Icon = ({ type, ...rest }) => <i {...rest} className={`fa fa-${type}`} />;

Icon.propTypes = propTypes;

export default Icon;
