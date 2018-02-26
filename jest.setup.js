import 'raf/polyfill';

// eslint-disable no-extraneous-dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';
// eslint-enable no-extraneous-dependencies

Enzyme.configure({ adapter: new Adapter() });
