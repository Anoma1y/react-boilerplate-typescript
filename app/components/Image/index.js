import React from 'react';
import styled from 'styled-components';

const Image = (props) => <img className={props.className} src={props.src} alt={props.alt} />;

const StyledImage = styled(Image)`
  width: 50%;
`;

export default StyledImage;
