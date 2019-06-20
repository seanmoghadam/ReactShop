import React, { useEffect, useState } from "react";
import { getBookById } from '../../api';

const BookDetails = (props) => {
  console.log(props);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getBookById(props.match.params.id)
      .then(book => {
        setBook(book);
        setLoading(false);
      })
      .catch(err => console.error(err))

  }, []);

  if (loading) return "Loading...";
  return <div>
    {book.title}
  </div>;
};

export default BookDetails;
