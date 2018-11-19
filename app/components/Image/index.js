import React from 'react';
import styled from 'styled-components';

const Image = (props) => <img className={props.className} src={props.src} alt={props.alt} />
const fuck = '10'

const StyledImage = styled(Image)`
  height: ${fuck}px;
  width: 50%;
`;

export default StyledImage;
