import { useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../../shared/Button"
import Loader from "../../shared/loader"
import dateService from "../../services/dateService"
import ConfirmModal from "../../shared/Modal"
import Paginations from "../../shared/Pagination"

const BookTable = (props) => {
    const description = "<div style={{text-align:'center' !important}}><strong>Are you sure you want to proceed?<strong></div>"
    const isLoading = props?.issueBooks?.loading
    const [inputData, setInputData] = useState({})
    const [showConfirm, setShowConfirm] = useState(false)
    const [bookList, setBookList] = useState(props?.issueBooks?.data?.books)
    const [pageNo, setPageNo] = useState(1)
    const itemPerPage = 10
    const [totalPages, setTotalPages] = useState(null)
    const buttonProps1 = {
        type: "Square",
        padding: "min",
        width: "70px",
        margin: "0 10px 0 0"
    }
    const buttonProps2 = {
        type: "Square",
        padding: "min",
        width: "70px",
        margin: "0 10px 0 0",
        color: "white",
        background: "red"
    }

    useEffect(()=>{
        setBookList(props?.issueBooks?.data?.books)
        setTotalPages(props.issueBooks?.data?.totalPages)
    },[props])

    const capitalizeFirstLetter = (val) => {
        if (val) {
            return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase()
        }
        return null
    }
    const getSerialNo = (index) => {
        return ((itemPerPage * (pageNo - 1)) + (index + 1))
    }
    const handleIssueClick = (e, status, _id) => {
        e.preventDefault();

        setInputData({ status, _id })
        setShowConfirm(true)
    };

    const confirmClicked = async () => {
        await props.issueActionRequest(inputData)
        setInputData({})
        setShowConfirm(false)
    }

    const handlePageClick = (page) => {
        setPageNo(page)
        props.getIssueBooksRequest(page)
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

    return (
        <>
            <Wrapper>
                <table id="hovered-table-id" className="table hovered-table-class">
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        {props && props.userDetails && props.userDetails.role !== "READER" ? <th>Requested By</th> : <th>Last Updated On</th>}
                        {props && props.userDetails && props.userDetails.role !== "READER" && <th>Actions</th>}
                    </tr>
                    {isLoading ?
                        <Loader />
                        : bookList && bookList.length > 0 ? bookList?.map((value, index) => {
                            return <tr key={index} >
                                <td>{getSerialNo(index)}</td>
                                <td>{value.book?.title}</td>
                                <td>{value.book?.author}</td>
                                <td>
                                    <StatusWrapper status={value.status}>{capitalizeFirstLetter(value.status)}</StatusWrapper>
                                </td>
                                {props && props.userDetails && props.userDetails.role !== "READER" ? <td> {value.user?.name} </td> : <td>{dateService(value.updatedAt)}</td>}
                                {props && props.userDetails && props.userDetails.role !== "READER" && (
                                    <td onMouseEnter={(e) => updateHoverClass(e, 'REMOVE')} onMouseLeave={(e) => updateHoverClass(e, "ADD")} onClick={(event) => event.stopPropagation()} >
                                        {value.status === "PENDING" ?
                                            <Button {...buttonProps1} onClick={(e) =>
                                                handleIssueClick(e, "ISSUED", value._id)} label="Issue" />
                                            : value.status === "ISSUED" ?
                                                <Button {...buttonProps1} onClick={(e) =>
                                                    handleIssueClick(e, "DEPOSITED", value._id)} label="Deposit" />
                                                :
                                                value.status === "DEPOSITED" ?
                                                    <p className="description">Book is deposited by user</p>
                                                    :
                                                    <p className="description">You were rejected this requested</p>
                                        }
                                        {value.status === "PENDING" && <Button label="Reject" {...buttonProps2} onClick={(e) => handleIssueClick(e, "REJECTED", value._id)} />}
                                    </td>
                                )}
                            </tr>
                        })
                            :
                            <tr>

                            <td colSpan={6} style={{textAlign:"center"}}>No data found.</td>
                            </tr>
                    }
                </table>
            </Wrapper>
            <Paginations totalPages={totalPages} pageClick={handlePageClick} />
            <ConfirmModal show={showConfirm} handleClose={() => setShowConfirm(false)} description={description} handleConfirm={confirmClicked} />
        </>
    )
}

export default BookTable

const Wrapper = styled.div`
    min-height:75vh;
    width: 90vw;
    margin: auto;
    padding: 30px 0 1px;
    .description {
        margin:auto;
        background:transparent !important;
    }
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
    
    .table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #3dc89f;
        color: white;
    }
    .hovered-table-class tr:hover {
        background-color: #ddd;
        transition: background-color 0.3s ease;
    }
  
`

const StatusWrapper = styled.span`
   background-color: transparent !important;
   color: ${props => props.status == 'PENDING' ? '#ed7b00' : props.status == 'REJECTED' ? 'red' : props.status == 'ISSUED' ? 'green' : 'green'} !important;
   padding: 0 !important;
`
