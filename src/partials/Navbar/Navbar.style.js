import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styled from "styled-components";
import { btnReset, DrawerWidth } from '../../global/styles';

//Solution for prop warning of MUI
export const NavBarWrapper = styled(({isNavOpened, ...props}) => <AppBar {...props}/>)`
&& {
 width: ${props => props.isNavOpened ? "calc(100% - " + DrawerWidth+ "px)" : "100%"};
 transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
 left: 0;
 background: white;
}
`;


export const NavBarInnerWrapper = styled.nav`
display: flex;
justify-content: space-between;
padding: 5px 10px;
a {
color: black
}
`;

export const CartButton = styled.button`
${btnReset}
`;
