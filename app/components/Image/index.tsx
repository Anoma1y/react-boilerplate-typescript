import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  src: string;
  alt: string;
}

const Image = (props: IProps) => (
  <img
    className={props.className}
    src={props.src}
    alt={props.alt}
  />
);

const StyledImage = styled(Image)`
  width: 50%;
`;

export default StyledImage;
