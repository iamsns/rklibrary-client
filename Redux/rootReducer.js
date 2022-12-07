import bookReducer from '../components/Books/redux/reducers';
import authReducer from '../components/Auth/redux/reducers';

const rootReducer = {books:bookReducer, auth:authReducer}
export default rootReducer