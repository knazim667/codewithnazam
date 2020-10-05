import styled from 'styled-components';

export const CardWraper = styled.div`
position : relative;
display : flex;
flex-direction : column;
min-width : 0;
background-color : ${props => props.backgroundColor || 'white'};
word-wrap : break-word;
background-clip : border-box;
border : 1px solid rgba(0,0,0,0.125);
border-radius : 3px;
width : ${props => props.width || '20rem'}

`;