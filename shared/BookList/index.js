import React from "react";
import BookCard from "../BookCard";
import Wrapper from "./styled";
import dynamic from "next/dynamic";
const BookTable = dynamic(() => import("./BookTable"), {ssr:false} )

const BookList = (props) => {
  const { bookData } = props
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    // console.log("booookDDD", bookData);
    setBooks(bookData?.books)
  }, [bookData]);

  
  return (
    <Wrapper>
      <BookTable {...props} />;
    </Wrapper>
  );
};

export default BookList;
