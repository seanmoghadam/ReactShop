import styled from "styled-components";
import { btnReset } from '../../global/styles';

export const BookOverviewHeadline = styled.h1`


`;


export const BookOverviewList = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;
width: 100%;
flex-flow: row wrap;

`;


export const BookOverviewListItem = styled.li`
flex-basis: calc(33.33% - 20px);
min-width: 100px;
padding: 5px;
margin: 5px;
box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);

img {
width: 100%;
}

p {
font-size: 11px;
}



`;

export const CartBtn = styled.button`
${btnReset}
`;


