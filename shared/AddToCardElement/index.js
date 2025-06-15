import { useRouter } from 'next/router'
import { connect } from "react-redux"

import { createStructuredSelector } from "reselect"
import { bindActionCreators } from 'redux';
import Button from "../Button"
import { issueNewBookRequest } from "../../components/IssueBooks/redux/actions";
import { selectIsLoggedIn, selectUserDetails } from "../../components/Auth/redux/selectors";
import ConfirmModal from "../Modal";
import React from "react";

const AddToCard = (props) => {
    const router = useRouter()
    const [showConfirm, setShowConfirm] = React.useState(false)
    const {issueNewBookRequest, userDatails} = props
    const buttonProps = {
        title:"Request",
        type:"Square",
        padding:"min",
        width: "100%",
        margin:"0",
        background:'#89f389'
    }

    const buttonClicked = (event) => {
        event.stopPropagation()
        setShowConfirm(true)
        
    }
    
    const confirmClicked = async () => {
        if (props.isLoggedIn) {
            await issueNewBookRequest({userID:userDatails._id, bookID:props.data._id})
            setShowConfirm(false)
        } else {
            router.push('/login')
        }
    }

    return (
        <>
        <Button {...buttonProps} onClick={buttonClicked}/>
        <ConfirmModal show={showConfirm} handleClose={()=>setShowConfirm(false)} bookName={props.data.title} handleConfirm={confirmClicked} />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    userDatails : selectUserDetails(),
    isLoggedIn : selectIsLoggedIn()
})

const mapDispatchToProps = dispatch => ({
    issueNewBookRequest: bindActionCreators(issueNewBookRequest, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddToCard)

