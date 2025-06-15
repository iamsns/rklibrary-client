import { useRouter } from "next/router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";import Link from "next/link";
import { selectEmail, selectIsLoggedIn, selectUserDetails } from "../../Auth/redux/selectors";
import { logoutRequest } from "../../Auth/redux/actions";
import dynamic from "next/dynamic";
const LoginTrigger = dynamic(() => import("./LoginTrigger"), { ssr: false });

const RightHeader = (props) => {
    const { userDetails } = props
    return (
        <span className="auth-item right-header">         
            <LoginTrigger {...props}  />
        </span>
    )
}


const mapStateToProps = createStructuredSelector({
    isLoggedIn: selectIsLoggedIn(),
    userEmail: selectEmail(),
    userDetails:selectUserDetails()
})
const mapDispatchToProps = dispatch => ({
    logoutRequest: bindActionCreators(logoutRequest, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(RightHeader);

