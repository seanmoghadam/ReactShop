import React from "react";
import Navbar from './layout/Navbar/Navbar';
import { ContentWrapper, DrawerWrapper } from "./App.style";
import {GlobalStyles} from './global/styles';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: false
    }

  }

  handleNavToggle = (isNavOpened) => {
    this.setState({
      isNavOpened
    });
  };


  render() {

    const { isNavOpened } = this.state;


    return <div>
      <GlobalStyles/>
      <Navbar isNavOpened={isNavOpened}
              handleNavToggle={this.handleNavToggle}/>

      <DrawerWrapper
        variant="persistent"
        anchor="right"
        open={isNavOpened}
      >
        Test
      </DrawerWrapper>
      <ContentWrapper isNavOpened={isNavOpened}>
        Content!

      </ContentWrapper>


    </div>

  }
};


/*const App = () => {

  const [name, setNewName] = useState("");

  const handleInput = (name) => {
    setNewName(name);
  };


  return <div>
    <input type="text" value={name} onChange={e => handleInput(e.target.value)}/>
    <p>
      {name}
    </p>


  </div>
};

export default App;*/



