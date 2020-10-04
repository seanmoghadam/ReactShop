import React from "react";
import PropTypes from "prop-types";

import "./BookListing.scss"
import {AppContext} from "../../App";

const addSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</svg>;

const BookListing = () => {

    return <AppContext.Consumer>
        {
            context => {
                if (!context.books || !context.books.length) {
                    return "Aktuell gibt es keine Bücher"
                } else return <>
                    <h1>Bestseller Bücher 2020</h1>
                    <ul className="book-overview-list">
                        {
                            context.books.map((book, index) =>
                                <li className="book-overview-list-item" key={book.isbn + index}>
                                    <p>{book.title}</p>
                                    <a href={"/details/" + book.isbn}>
                                        <img src={book.image} alt={book.title}/>
                                    </a>
                                    <button
                                        className="cart-button"
                                        onClick={() => {
                                            context.addItemToCart(book);
                                            if (!context.isDrawerOpened) {
                                                context.toggleDrawer();
                                            }
                                        }}>
                                        {addSVG}
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </>
            }
        }
    </AppContext.Consumer>;

};

BookListing.propTypes = {
    books: PropTypes.array,
    addItemToCart: PropTypes.func,
    isDrawerOpened: PropTypes.bool,
    toggleDrawer: PropTypes.func
};

export default BookListing;


