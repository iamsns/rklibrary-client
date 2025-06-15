import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { selectUserDetails } from "../Auth/redux/selectors";
import { useRouter } from "next/router";
import Booktable from "./BookTable";
import dynamic from "next/dynamic";
import { getIssueBooksRequest, issueActionRequest } from "./redux/actions";
import { selectIssueBooks } from "./redux/selectors";
import { useEffect } from "react";
const BookTable = dynamic(() => import("./BookTable"), {ssr:false} )
const Mybooks = (props) => {
    useEffect(()=>{
        props.getIssueBooksRequest()
    },[])
    // console.log("props issue", props)
    const router = useRouter();
    return <BookTable {...props} />
}

const mapStateToProps = createStructuredSelector({
    userDetails : selectUserDetails(),
    issueBooks : selectIssueBooks()
})
const mapDispatchToProps = dispatch => ({
    getIssueBooksRequest : bindActionCreators(getIssueBooksRequest, dispatch),
    issueActionRequest : bindActionCreators(issueActionRequest, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mybooks);