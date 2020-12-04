import styled from 'styled-components';

export const Input = styled.input`
padding : 0.5em;
margin : 0.5em auto;
color : ${props => props.inputColor || 'rebeccapurple'};
background-color : #fff;
border : 1px solid #ddd;
border-radius : 3px;
width : 100%;
justify-content : center;


`;

.contact .contactform input[type=text], .contact .contactform input[type=email] {
    background: #252525;
    color: #fff;
    padding: 11px 26px;
    margin-bottom: 30px;
    border-radius: 30px;
    outline: none !important;
    transition: .3s;
}