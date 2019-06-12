import styled from "styled-components";
import Drawer from '@material-ui/core/Drawer';
import { DrawerWidth } from './global/styles';


export const ContentWrapper = styled.main`
    margin-top: 3em;
    padding-right: ${props => props.isNavOpened ? DrawerWidth + "px" : 0}
    background: darkblue;
    transition: padding-right 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    
`;

export const DrawerWrapper = styled(Drawer)`
& > div {
width: ${DrawerWidth}px;
}
`;


