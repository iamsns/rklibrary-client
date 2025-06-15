import React, { useEffect } from "react"
import styled from "styled-components"
import Button from "../../shared/Button"
import AddToCard from "../AddToCardElement"
import { selectBooksState } from "../../components/Books/Redux/selectors"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import Loader from "../loader"
import ViewBookDetails from "./viewBookDetails"

const BookTable = (props) => {
    const [showDetails, setShowDetails] = React.useState(false)
    const [bookDetails, setBookDetails] = React.useState({})
    console.log("booktable", props)
    const isLoading = props?.bookState?.loading

    const books = props?.bookData?.books

    const buttonClicked = (event) => {
        event.stopPropagation()
    }
    const buttonProps = {
        title: "Edit",
        type: "Square",
        padding: "min",
        width: "100%",
        margin: "5px 0 0",
        background: '#3dc89f'
    }
    const handleBookClick = (event, data) => {
        event.stopPropagation()
        setBookDetails(data)
        setShowDetails(true)
    }
    return (
        <>
            <Wrapper>
                <table className="table">
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        {props && props.userDetails && props.userDetails.role !== "READER" ? <th>Quantity</th> : null}
                        <th>Actions</th>
                    </tr>
                    {isLoading ? <Loader /> :
                        books && books?.length > 0 ? books?.map((value, index) => {
                            return <tr style={{cursor:'pointer'}} key={index} onClick={(event)=>handleBookClick(event, value)} >
                                <td>{index + 1}</td>
                                <td>{value?.title}</td>
                                <td>{value?.author}</td>
                                <td>{value.quantity > 0 ? <span style={{ 'background-color': 'transparent', 'color': 'green', 'padding': '0' }}>AVAILABLE</span> : <span style={{ 'background-color': 'transparent', 'color': 'red', 'padding': '0' }}>NOT AVAILABLE</span>}</td>
                                {props && props.userDetails && props.userDetails.role !== "READER" ? <td>{value.quantity}</td> : null}
                                {props && props.userDetails && props.userDetails.role !== "READER" ? <td> <Button className='btn' {...buttonProps} onClick={buttonClicked} /></td> : <td onClick={(event)=>event.stopPropagation()}><AddToCard className='btn' data={value} /></td>}
                                {/* {props && props.userDetails && props.userDetails.role !== "READER" ? <td> {value.user?.name} </td> : <td>{value.book?.issuedBy}</td>}
                        {props && props.userDetails && props.userDetails.role !== "READER" && (
                            <td>
                                {value.status === "PENDING" ?
                                    <Button {...buttonProps} onClick={() => props.issueActionRequest({ status: "ISSUED", _id: value._id })} title="Issue" />
                                    : value.status === "ISSUED" ?
                                        <Button {...buttonProps} onClick={() => props.issueActionRequest({ status: "DEPOSITED", _id: value._id })} title="Deposit" />
                                        :
                                        value.status === "DEPOSITED" ?
                                            <p>Book is deposited by user</p>
                                            :
                                            <p>You were rejected this requested</p>
                                }
                                {value.status === "PENDING" && <Button title="Reject" {...buttonProps} onClick={() => props.issueActionRequest({ status: "REJECTED", _id: value._id })} />}
                            </td>
                        )} */}
                            </tr>
                        })
                            :
                            <div>No Books Available</div>

                    }
                </table>
            </Wrapper>
            <ViewBookDetails show={showDetails} handleClose={() => setShowDetails(false)} data={bookDetails} />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    bookState: selectBooksState(),
});

const mapDispatchToProps = dispatch => ({
    // getBooksRequest: bindActionCreators(getBooksRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTable);

const Wrapper = styled.div`
    min-height:64vh;
    width: 90vw;
    margin: auto;
    padding: 0px 0;
    .table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
  
    .table td, .table th {
        border: 1px solid #ddd;
        padding: 8px;
    }
  
    .table tr:nth-child(even){background-color: #f2f2f2;}
  
    .table tr:hover {background-color: #ddd;transition: background-color 0.3s ease;}
    .table tr :hover button {
        .table tr:hover {background-color: unset;}
    }
  
    .table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #3dc89f;
        color: white;
    }
`
