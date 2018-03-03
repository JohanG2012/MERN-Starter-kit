import styled from 'styled-components';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const defaultProps = {
  align: 'none'
};

const Brand = styled.div`
  float: ${props => props.align};
  color: ${colors.white};
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  font-family: ${fonts.primary};
`;

Brand.defaultProps = defaultProps;

export default Brand;
