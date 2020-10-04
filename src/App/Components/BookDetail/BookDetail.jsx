import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { AddSVG } from "../Icons/Icons.jsx";
import "./BookDetail.scss";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { getBookById } from "../../../api.js";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const params = useParams();

    const [book, setBook] = useState()

    useEffect(async() => {
        const book = await getBookById(params.id);
    }, []);

    return (
       book && book.title
    );
};

BookDetail.propTypes = {
    books: PropTypes.array,
    addItemToCart: PropTypes.func,
    isDrawerOpened: PropTypes.bool,
    toggleDrawer: PropTypes.func,
};

export default BookDetail;
