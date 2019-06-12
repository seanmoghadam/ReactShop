import React from "react";
import Navbar from '../partials/Navbar/Navbar';
import { ContentWrapper, DrawerWrapper } from "./App.style";
import { GlobalStyles } from '../global/styles';
import booksApi from "../api";
import BookOverview from './BookOverview/BookOverview';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: false,
      books: [],
      loading: true,

    }
  }

  handleNavToggle = (isNavOpened) => {
    this.setState({
      isNavOpened
    });
  };

  //Wird direkt nach dem erstellen der Komponente ausgeführt
  componentDidMount() {
    booksApi()
      .then(books => {
        this.setState({
          loading: false,
          books
        })

      })
      .catch(err => console.error(err))
  }


  //Wird ausgeführt wenn die Komponente "zerstört" wird
  componentWillUnmount() {
  }


  render() {

    const { isNavOpened, books, loading } = this.state;


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

        {
          !loading ? <BookOverview books={books}/> : <p>Loading...</p>
        }


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



