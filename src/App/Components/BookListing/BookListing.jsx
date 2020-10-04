import React from "react";
import PropTypes from "prop-types";
import { AddSVG } from "../Icons/Icons.jsx";
import "./BookListing.scss"
import {AppContext} from "../../App";
import { Link } from 'react-router-dom';

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
                                    <Link to={"/details/" + book.isbn}>
                                        <img src={book.image} alt={book.title}/>
                                    </Link>
                                    <button
                                        className="cart-button"
                                        onClick={() => {
                                            context.addItemToCart(book);
                                            if (!context.isDrawerOpened) {
                                                context.toggleDrawer();
                                            }
                                        }}>
                                        <AddSVG/>
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


