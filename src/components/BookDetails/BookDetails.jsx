import React, {useEffect} from "react";
import { getBookById } from '../../api';

const BookDetails = (props) => {
  console.log(props);

  useEffect(() => {
    console.log(props);
    getBookById(props.match.params.id).then(data => console.log(data))
  }, []);

  return "Book Details"
};

export default BookDetails;
