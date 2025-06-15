import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from 'redux';

import BookList from "../../shared/BookList";
import Wrapper from "../../shared/BookList/styled";
import { getBooksRequest } from "../Books/redux/actions";
import { selectBooks } from "../Books/redux/selectors";

const Index = (props) => {
  React.useEffect(() => {
    getBooksRequest({boodData:"ji ha"})
  }, []);
  return (
    <Wrapper>
      <BookList {...props} />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  bookData: selectBooks()
});

const mapDispatchToProps = dispatch => ({
  getBooksRequest: bindActionCreators(getBooksRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);