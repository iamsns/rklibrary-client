import { useEffect } from "react"
import styled from "styled-components"
import Button from "../../shared/Button"
import { getIssueBooksRequest, issueActionRequest } from "./redux/actions"
import Loader from "../../shared/loader"
import dateService from "../../services/dateService"

const BookTable = (props) => {
    console.log("issueState", props.issueBooks)
    const isLoading = props?.issueBooks?.loading
    const buttonProps1 = {
        type: "Square",
        padding: "min",
        width: "30%",
        margin: "10px"
    }
    const buttonProps2 = {
        type: "Square",
        padding: "min",
        width: "30%",
        margin: "10px",
        color:"white",
        background:"red"
    }

    return (
        <Wrapper>
            <table className="table">
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    {props && props.userDetails && props.userDetails.role !== "READER" ? <th>Requested By</th> : <th>Last Update On</th>}
                    {props && props.userDetails && props.userDetails.role !== "READER" && <th>Actions</th>}
                </tr>
                {isLoading ?
                <Loader />
                : props && props.issueBooks && props.issueBooks.data?.length > 0 ? props.issueBooks.data?.map((value, index) => {
                    return <tr key={index} >
                        <td>{index + 1}</td>
                        <td>{value.book?.title}</td>
                        <td>{value.book?.author}</td>
                        <td>
                            {value.status=='PENDING' ? <span style={{ 'background-color': 'transparent', 'color': '#ed7b00', 'padding': '0' }}>{value.status}</span>  
                            : value.status == 'REJECTED' ? <span style={{ 'background-color': 'transparent', 'color': 'red', 'padding': '0' }}>{value.status}</span>:
                            value.status=='ISSUED' ? <span style={{ 'background-color': 'transparent', 'color': 'green', 'padding': '0' }}>{value.status}</span>:
                            <span style={{ 'background-color': 'transparent', 'color': 'green', 'padding': '0' }}>{value.status}</span>}
                        </td>
                        {props && props.userDetails && props.userDetails.role !== "READER" ? <td> {value.user?.name} </td> : <td>{dateService(value.updatedAt)}</td>}
                        {props && props.userDetails && props.userDetails.role !== "READER" && (
                            <td>
                                {value.status === "PENDING" ? 
                                <Button {...buttonProps1} onClick={() => props.issueActionRequest({ status: "ISSUED", _id: value._id })} title="Issue" />
                                : value.status === "ISSUED" ?
                                <Button {...buttonProps1} onClick={() => props.issueActionRequest({ status: "DEPOSITED", _id: value._id })} title="Deposit" />
                                : 
                                value.status === "DEPOSITED" ?
                                <p>Book is deposited by user</p>
                                :
                                 <p>You were rejected this requested</p>
                                }
                                {value.status === "PENDING" && <Button title="Reject" {...buttonProps2} onClick={() => props.issueActionRequest({ status: "REJECTED", _id: value._id })} /> }
                            </td>
                        )}
                    </tr>
                })
                    :
                    <div>No Books Available</div>
                }
            </table>
        </Wrapper>
    )
}

export default BookTable

const Wrapper = styled.div`
    min-height:75vh;
    width: 90vw;
    margin: auto;
    padding: 30px 0;
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
  
  .table tr:hover {background-color: #ddd;}
  
  .table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3dc89f;
    color: white;
  }
`
