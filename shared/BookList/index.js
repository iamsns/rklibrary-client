import React from "react";
import BookCard from "../BookCard";
import Wrapper from "./styled";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from 'redux';
import {getBooksRequest} from "../../components/Books/redux/actions"
import {selectBooks} from "../../components/Books/redux/selectors"
import { loginRequest } from "../../components/Auth/redux/actions";

const BookList = (props) => {
  const {getBooksRequest, bookData} = props
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    getBooksRequest({boodData:"ji ha"})
    loginRequest({loginBooks : "yes"})
  }, []);
  React.useEffect(() => {
    setBooks(bookData?.books)
    console.log("bbooksData", bookData)
  }, [bookData]);

  
  return (
    <Wrapper>
      {books?.map((data, index) => {
        return <BookCard data={data} bookData={bookData} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  bookData: selectBooks()
});

const mapDispatchToProps = dispatch => ({
  getBooksRequest: bindActionCreators(getBooksRequest, dispatch),
  loginRequest : bindActionCreators(loginRequest, dispatch )
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
