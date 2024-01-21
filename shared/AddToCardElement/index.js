import { useRouter } from 'next/router'
import { connect } from "react-redux"

import { createStructuredSelector } from "reselect"
import { bindActionCreators } from 'redux';
import Button from "../Button"
import { issueNewBookRequest } from "../../components/IssueBooks/redux/actions";
import { selectIsLoggedIn, selectUserDetails } from "../../components/Auth/redux/selectors";
import ConfirmModal from "../Modal";
import React from "react";
import cogoToast from 'cogo-toast';

const AddToCard = (props) => {
    const router = useRouter()
    const [showConfirm, setShowConfirm] = React.useState(false)
    const {issueNewBookRequest, userDatails} = props
    const description = `You are requesting to issue a book named <strong>${props.data.title}</strong>.`
    const buttonProps = {
        label:"Request",
        type:"Square",
        padding:"min",
        width: "100%",
        margin:"0",
        background:'#89f389'
    }

    const buttonClicked = (event) => {
        event.stopPropagation()
        if (props.isLoggedIn) {
            setShowConfirm(true)
        } else {
            cogoToast.warn("Please login first to continue!")
            router.push('/login')
        }
        
    }
    
    const confirmClicked = async () => {
        if (props.isLoggedIn) {
            await issueNewBookRequest({userID:userDatails._id, bookID:props.data._id})
            setShowConfirm(false)
        } else {
            cogoToast.warn("Please login first to continue!")
            router.push('/login')
        }
    }

    return (
        <>
        <Button {...buttonProps} onClick={buttonClicked}/>
        <ConfirmModal show={showConfirm} handleClose={()=>setShowConfirm(false)} heading="Are you sure?" description={description} handleConfirm={confirmClicked} />
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

