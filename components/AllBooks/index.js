import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from 'redux';

import BookList from "../../shared/BookList";
import Wrapper from "../../shared/BookList/styled";
import { getBooksRequest } from "../../components/Books/redux/actions";
import { selectBooks } from "../Books/Redux/selectors";
import { selectUserDetails } from "../Auth/redux/selectors";

const Index = () => {
  return (
    <Wrapper>
      <BookList />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  bookData: selectBooks(),
  userDetails: selectUserDetails()
});

const mapDispatchToProps = dispatch => ({
  getBooksRequest: bindActionCreators(getBooksRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);