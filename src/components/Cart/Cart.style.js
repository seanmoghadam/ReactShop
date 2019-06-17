import styled, {css} from "styled-components";
import { btnReset } from '../../global/styles';

export const CartWrapper = styled.aside`
margin: 0 5px;
height: 100vh;
`;

export const CartHeader = styled.h2`
font-size: 18px;
text-align: center;


`;

export const CartFooter = styled.footer`
height: 30px;
display: flex;
justify-content: space-between;
padding: 0 ;

`;

export const CartList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
height: calc(100vh - 107.5px);
overflow-y: auto;

`;

export const CartListItem = styled.li`
padding: 5px;
font-size: 10px;
display: flex;
justify-content: space-between;
flex-wrap: nowrap;
p {
word-break: break-word;
}


${props => props.isEven && css`
    background: lightgrey;
`};

button {
${btnReset}
}




`;
