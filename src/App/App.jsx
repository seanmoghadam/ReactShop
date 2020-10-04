import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Loading from "./Components/Loading/Loading";
import Cart from "./Components/Cart/Cart";
import {allBooks} from "../api";
import routes from "../routes/routes";

export const AppContext = React.createContext({});

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            books: [],
            cart: [],
            isDrawerOpened: false
        }
    }

    //wird direkt nach dem erstellen (mounten) der Komponente ausgeführt
    componentDidMount() {
        allBooks()
            .then(books => {
                this.setState({books})
            })
            .catch(e => console.error(e))
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    //wird direkt nach dem zerstören der komponente ausgeführt
    componentWillUnmount() {
    }

    static getDerivedStateFromProps() {
        return {}
    }

    addItemToCart = (book) => {
        this.setState({
            cart: [...this.state.cart, book]
        })
    };

    removeItemFromCart = (index) => {
        // aktuellen durchgang des arrays -> index
        let newCart = [...this.state.cart];

        // lösche item aus dem cart - (Array).splice
        newCart.splice(index, 1);

        // setze neuen state mit neuem array ohne dem item mit dem index
        this.setState({
            cart: newCart
        })

    };

    toggleDrawer = () => {
        this.setState({
            isDrawerOpened: !this.state.isDrawerOpened
        })
    };

    render() {

        const {books, loading, cart, isDrawerOpened} = this.state;

        const getGeneratedClass = (defaultClass) => {
            const className = [defaultClass];
            if (isDrawerOpened) {
                className.push("drawer-opened")
            } else {
                className.push("drawer-closed")
            }
            return className.join(" ");
        };

        return <div>

            <AppContext.Provider value={{
                isDrawerOpened: isDrawerOpened,
                books: books,
                cart: cart,
                addItemToCart: this.addItemToCart,
                removeItemFromCart: this.removeItemFromCart,
                toggleDrawer: this.toggleDrawer
            }}>
                <Navigation/>

                <Loading loading={loading}/>

                <div className={getGeneratedClass("main-wrapper")}>
                    <div className="main-col-wrapper">
                        <div className="content-wrapper">
                            {!loading && routes}
                        </div>
                    </div>
                </div>
                <div className={getGeneratedClass("drawer-wrapper")}>
                    <Cart cart={cart} removeItemFromCart={this.removeItemFromCart}/>
                </div>

            </AppContext.Provider>

        </div>
    }

}
