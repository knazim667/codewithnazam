import React from "react";
import styled from "styled-components";

const ImageWrapper = styled("img")`
        display : 'block',
        maxWidth : '100%',
        height : 'auto',

`;
const Image = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);
export default Image;
