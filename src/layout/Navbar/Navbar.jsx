import React from "react";
import {NavBarWrapper} from './Navbar.style';

const NavBar = (props) => {

  return <NavBarWrapper isNavOpened={props.isNavOpened}>
    <div>
      <button onClick={() => props.handleNavToggle(!props.isNavOpened)}>
        toggle
      </button>
    </div>

  </NavBarWrapper>
};

export default NavBar;
