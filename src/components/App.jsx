import React from "react";
import Navbar from '../partials/Navbar/Navbar';
import { ContentWrapper, DrawerWrapper } from "./App.style";
import { GlobalStyles } from '../global/styles';
import booksApi from "../api";
import BookOverview from './BookOverview/BookOverview';
import Cart from './Cart/Cart';
export const AppContext = React.createContext({});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: false,
      books: [],
      loading: true,
      cartItems: []
    }
  }


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


  handleNavToggle = (isNavOpened) => {
    this.setState({
      isNavOpened
    });
  };


  addItemToCart = (cartItem) => {
    //fügt ein Buch dem Cart hinzu
    this.setState({
      cartItems: [...this.state.cartItems, cartItem]
    });

  };

  deleteItemFromCart = (index) => {
    let copiedCart = [...this.state.cartItems];
    copiedCart.splice(index, 1);
    this.setState({
      cartItems: copiedCart
    });

  };


  render() {

    const { isNavOpened, books, loading, cartItems } = this.state;




    return <div>
      <AppContext.Provider value={{
        isNavOpened,
        books,
        cartItems,
        addItemToCart: this.addItemToCart,
        deleteItemFromCart: this.deleteItemFromCart,
        handleNavToggle: this.handleNavToggle
      }}>
      <GlobalStyles/>
      <Navbar/>

      <DrawerWrapper
        variant="persistent"
        anchor="right"
        open={isNavOpened}>

        <Cart/>

      </DrawerWrapper>
      <ContentWrapper isNavOpened={isNavOpened}>

        {
          !loading ? <BookOverview/> : <p>Loading...</p>
        }


      </ContentWrapper>

      </AppContext.Provider>
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



