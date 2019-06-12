import styled from "styled-components";
import Drawer from '@material-ui/core/Drawer/index';
import { DrawerWidth } from '../global/styles';


export const ContentWrapper = styled.main`
    margin-top: 3em;
    padding: 0 10px;
    padding-right: ${props => props.isNavOpened ? DrawerWidth + 10 + "px" : 10}
    transition: padding-right 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    
`;

export const DrawerWrapper = styled(Drawer)`
& > div {
width: ${DrawerWidth}px;
}
`;


