import bookReducer from '../components/Books/redux/reducers';
import authReducer from '../components/Auth/redux/reducers';
import issueBooksReducer from '../components/IssueBooks/redux/reducers';
import bookDetailsReducer from '../components/Book/redux/reducers';
import usersReducer from '../components/Users/redux/reducers'

const rootReducer = { books: bookReducer, auth: authReducer, issueBooks: issueBooksReducer, bookDetails: bookDetailsReducer, usersState: usersReducer }
export default rootReducer