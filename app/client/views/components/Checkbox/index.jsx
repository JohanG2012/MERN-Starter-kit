import React from 'react';
import PropTypes from 'prop-types';
import FakeLabel from './FakeLabel';
import Label from './Label';
import Input from './Input';

const propTypes = {
  children: PropTypes.string.isRequired
};

/**
 * Checkbox component, used instead of input[type="checkbox"]
 * @param {string} children Label for the CheckBox component
 */
const Checkbox = ({ children }) => (
  <div>
    <Input className="" id="cbx" fakeLabel="{FakeLabel}" type="checkbox" />
    <FakeLabel for="cbx" className="cbx" />
    <Label class="lbl" for="cbx">
      {children}
    </Label>
  </div>
);

Checkbox.propTypes = propTypes;

export default Checkbox;
