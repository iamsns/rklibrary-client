import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import CryptoJS from 'crypto-js';
import styled from "styled-components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import Paginations from "../Pagination"
import Button from "../../shared/Button"
import AddToCard from "../AddToCardElement"
import { selectBooksState } from "../../components/Books/Redux/selectors"
import Loader from "../loader"
import ViewBookDetails from "./viewBookDetails"
import { getBooksRequest } from "../../components/Books/redux/actions"
import { selectUserDetails } from "../../components/Auth/redux/selectors"

const BookTable = (props) => {
    const router = useRouter()
    const [showDetails, setShowDetails] = React.useState(false)
    const [bookDetails, setBookDetails] = React.useState({})
    const [bookList, setBookList] = useState([])
    const [totalPages, setTotalPages] = useState(null)
    const [pageNo, setPageNo] = useState(1)
    const [isButtonHovered, setIsButtonHovered] = useState(false)
    const itemPerPage = 10
    useEffect(() => {
        props.getBooksRequest({ page: 1 })
    }, [])

    const getSerialNo = (index) => {
        return ((itemPerPage * (pageNo - 1)) + (index + 1))
    }
    useEffect(() => {
        setBookList(props?.bookState?.data?.books)
        setTotalPages(props?.bookState?.data?.totalPages)
    }, [props?.bookState?.data?.books])

    const buttonClicked = (event, data) => {
        event.stopPropagation()
        const secretKey = process.env.SECRET_KEY
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
        const base64EncodedData = btoa(encryptedData);
        router.push(`/add-book?data=${base64EncodedData}`);
    }
    const buttonProps = {
        label: "Edit",
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

    const handlePageClick = (page) => {
        setPageNo(page)
        props.getBooksRequest({ page: page })
    }

    const updateHoverClass = (event, type) => {
        event.stopPropagation()
        let element = document.getElementById("hovered-table-id")
        if (type == 'REMOVE') {
            element.classList.remove("hovered-table-class");
        } else {
            element.classList.add("hovered-table-class");
        }
    }

    const addButtonProps = {
        float: 'right',
        label: "+ Add New Book",
        type: "Square",
        borderRadius: '3px',
        width: '220px',
        padding: 'high',
        margin: '0 0 10px',
        background: '#3dc89f'
    }

    const handleAddBook = (e) => {
        e.preventDefault()
        router.push('/add-book')
    }

    return (
        <>
            <Wrapper>
                {props && props.userDetails && props.userDetails.role !== "READER" && <Button className='btn' {...addButtonProps} onClick={handleAddBook} />}
                <table id="hovered-table-id" className="table hovered-table-class">
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        {props && props.userDetails && props.userDetails.role !== "READER" ? <th>Quantity</th> : null}
                        <th>Actions</th>
                    </tr>
                    {props?.bookState?.loading ? <Loader /> :
                        bookList && bookList?.length > 0 ? bookList?.map((value, index) => {
                            return <tr style={{ cursor: 'pointer' }} key={index} onClick={(event) => handleBookClick(event, value)} >
                                <td>{getSerialNo(index)}</td>
                                <td>{value?.title}</td>
                                <td>{value?.author}</td>
                                <td>{value.quantity > 0 ?
                                    <span style={{ 'backgroundColor': 'transparent', 'color': 'green', 'padding': '0' }}>AVAILABLE
                                    </span>
                                    :
                                    <span style={{ 'backgroundColor': 'transparent', 'color': 'red', 'padding': '0' }}>NOT AVAILABLE
                                    </span>
                                }
                                </td>
                                {props && props.userDetails && props.userDetails.role !== "READER"
                                    ?
                                    <td>{value.quantity}</td>
                                    :
                                    null
                                }

                                {props && props.userDetails && props.userDetails.role !== "READER"
                                    ?
                                    <td onMouseEnter={(e) => updateHoverClass(e, 'REMOVE')} onMouseLeave={(e) => updateHoverClass(e, "ADD")}>
                                        <Button className='btn' {...buttonProps} onClick={(e) => buttonClicked(e, value)} /></td>
                                    :
                                    <td onMouseEnter={(e) => updateHoverClass(e, 'REMOVE')} onMouseLeave={(e) => updateHoverClass(e, "ADD")} onClick={(event) => event.stopPropagation()} >
                                        <AddToCard className='btn' data={value} />
                                    </td>
                                }
                                {/* {props && props.userDetails && props.userDetails.role !== "READER" ? <td> {value.user?.name} </td> : <td>{value.book?.issuedBy}</td>}
                        {props && props.userDetails && props.userDetails.role !== "READER" && (
                            <td>
                                {value.status === "PENDING" ?
                                    <Button {...buttonProps} onClick={() => props.issueActionRequest({ status: "ISSUED", _id: value._id })} label="Issue" />
                                    : value.status === "ISSUED" ?
                                        <Button {...buttonProps} onClick={() => props.issueActionRequest({ status: "DEPOSITED", _id: value._id })} label="Deposit" />
                                        :
                                        value.status === "DEPOSITED" ?
                                            <p>Book is deposited by user</p>
                                            :
                                            <p>You were rejected this requested</p>
                                }
                                {value.status === "PENDING" && <Button label="Reject" {...buttonProps} onClick={() => props.issueActionRequest({ status: "REJECTED", _id: value._id })} />}
                            </td>
                        )} */}
                            </tr>
                        })
                            :
                            <tr>

                                <td colSpan={6} style={{ textAlign: "center" }}>No Books Available</td>
                            </tr>

                    }
                </table>
            </Wrapper>
            <ViewBookDetails show={showDetails} handleClose={() => setShowDetails(false)} data={bookDetails} />
            <Paginations totalPages={totalPages} pageClick={handlePageClick} />

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    bookState: selectBooksState(),
    userDetails: selectUserDetails()
});

const mapDispatchToProps = dispatch => ({
    getBooksRequest: bindActionCreators(getBooksRequest, dispatch)
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
  
    .table tr:nth-child(even) {
        background-color: #f2f2f2;
    }
  
    .hovered-table-class tr:hover {
        background-color: #ddd;
        transition: background-color 0.3s ease;
    }
  
    .table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #3dc89f;
        color: white;
    }
`
