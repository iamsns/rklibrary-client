import { useRouter } from "next/router";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux";
import { selectUserDetails } from "../../Auth/redux/selectors"
import { useEffect, useState } from "react"
import { Wrapper, StatusWrapper, TableWrapper } from "./styled"
import cogoToast from "cogo-toast";
import Loader from "../../../shared/loader";
import Button from "../../../shared/Button";
import { getUsersRequest, usersActionRequest } from "../redux/actions";
import { selectUsersState } from "../redux/selectors";
import ConfirmModal from "../../../shared/Modal";
import Paginations from "../../../shared/Pagination";

const User = (props) => {

    const router = useRouter()
    const [list, setList] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [inputData, setInputData] = useState({})
    const [description, setDescription] = useState(null)
    const [totalPages, setTotalPages] = useState(null)
    const [showConfirm, setShowConfirm] = useState(false)
    const itemPerPage = 5
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        props?.getUsersList({ page: pageNo, role: 'LIBRARIAN' })
    }, [])

    useEffect(() => {
        setIsLoading(props.usersList.loading)
        setList(props.usersList.data)
        setTotalPages(props.usersList?.totalPages)
        if (props?.userDetails?.role != 'ADMIN') {
            cogoToast.error("You are not authorized for this page!")
            router.push('/')
        } else {

        }
    }, [props.usersList])

    const getSerialNo = (index) => {
        return ((itemPerPage * (pageNo - 1)) + (index + 1))
    }

    const capitalizeFirstLetter = (val) => {
        if (val) {
            return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase()
        }
        return null
    }

    const handleButtonClick = (e, data, status) => {
        e.preventDefault();
        setInputData({ userID: data._id, status })
        setShowConfirm(true)
    };

    const confirmClicked = () => {
        setShowConfirm(false)
        props.usersActionRequest({ inputData: inputData, getReqData: { page: pageNo, role: 'LIBRARIAN' } })
    };

    const handlePageClick = (page) => {
        setPageNo(page)
        props?.getUsersList({ page: page, role: 'LIBRARIAN' })
    }

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

    if (props.userDetails?.role == 'ADMIN') {
        return <Wrapper>
            <TableWrapper>
                <table id="hovered-table-id" className="table hovered-table-class">
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {isLoading ? <Loader /> :

                        list?.length > 0 ? list?.map((value, index) => {
                            return <tr key={index}>
                                <td>{getSerialNo(index)}</td>
                                <td>{value?.name}</td>
                                <td>{value?.email}</td>
                                <td>
                                    <StatusWrapper status={value.status}>{capitalizeFirstLetter(value.status)}</StatusWrapper>
                                </td>

                                {
                                    value?.status == "PENDING"
                                        ?
                                        <td>
                                            <Button className='btn' {...buttonProps1} onClick={(e) => handleButtonClick(e, value, 'ACTIVE')} label="Approve" />
                                            <Button className='btn' {...buttonProps2} onClick={(e) => handleButtonClick(e, value, 'REJECTED')} label="Reject" />
                                        </td>
                                        :
                                        value?.status == "ACTIVE" ?
                                            <td>
                                                <Button className='btn' {...buttonProps2} onClick={(e) => handleButtonClick(e, value, 'DEACTIVE')} label="Deactive" />
                                            </td>
                                            :
                                            value?.status == "DEACTIVE" ?
                                                <td>
                                                    <Button className='btn' {...buttonProps1} onClick={(e) => handleButtonClick(e, value, "ACTIVE")} label="Active" />
                                                </td>
                                                : <td style={{ height: '57px' }}>
                                                    You were rejected this request
                                                </td>
                                }
                            </tr>
                        })
                            :
                            <tr>

                                <td colSpan={5} style={{ textAlign: "center" }}>No Books Available</td>
                            </tr>
                    }
                </table>

            </TableWrapper>
            <Paginations totalPages={totalPages} pageClick={handlePageClick} />
            <ConfirmModal show={showConfirm} handleClose={() => setShowConfirm(false)} heading="Are you sure?" description={description} handleConfirm={confirmClicked} />
        </Wrapper >
    } else {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    getUsersList: bindActionCreators(getUsersRequest, dispatch),
    usersActionRequest: bindActionCreators(usersActionRequest, dispatch),
})

const mapStateToProps = createStructuredSelector({
    userDetails: selectUserDetails(),
    usersList: selectUsersState(),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)