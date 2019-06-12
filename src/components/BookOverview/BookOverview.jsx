import React from "react";
import { BookOverviewHeadline, BookOverviewList, BookOverviewListItem } from './BookOverview.style';

const BookOverview = (props) => {

  return <>
    <BookOverviewHeadline>Bücher!</BookOverviewHeadline>
    <BookOverviewList>
      {props.books.map((book, index) =>
        (
          <BookOverviewListItem key={index}>
            <p>{book.title}</p>
            <img src={book.image} alt={book.title}/>
          </BookOverviewListItem>
        )
      )}
    </BookOverviewList>
  </>
};

export default BookOverview;


