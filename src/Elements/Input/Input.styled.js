import styled from 'styled-components';

export const Input = styled.input`
padding : 0.5em;
margin : 0.5em auto;
color : ${props => props.inputColor || 'rebeccapurple'};
background : papayawhip;
border : none;
border-radius : 3px;
width : 90%;
justify-content : center;


`;