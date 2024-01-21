import { createStructuredSelector } from "reselect"
import Wrapper from "./styled"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Paginations from "../../shared/Pagination"
import { useState } from "react"
import Button from "../../shared/Button"
import { getCategoriesRequest, updateCategoryRequest } from "../Book/redux/actions"
import { selectCategories, selectIsLoading } from "../Book/redux/selectors"
import { useEffect } from "react"
import CategoryForm from "./components/categoryForm"
import Loader from '../../shared/loader'
import dateService from "../../services/dateService"

const BookCategories = (props) => {

    const [pageNo, setPageNo] = useState(1)
    const itemPerPage = 10

    useEffect(() => {
        props.getCategoriesRequest({ page: pageNo, itemPerPage })
    }, [])

    const [catDetails, setCatDetails] = useState({})
    const [showForm, setShowForm] = useState(false)
    const buttonProps = {
        label: "Edit",
        type: "Square",
        padding: "min",
        width: "100%",
        margin: "0",
        background: '#89f389'
    }
    const addButtonProps = {
        float: 'right',
        label: "+ Add New Category",
        type: "Square",
        borderRadius: '3px',
        width: '220px',
        padding: 'high',
        margin: '0 0 10px',
        background: '#3dc89f'
    }
    const handleAddCategory = (e, type, data) => {
        e.preventDefault()
        setCatDetails(data)
        setShowForm(true)
    }

    const handlePageClick = (page) => {
        setPageNo(page)
        props.getCategoriesRequest({ page, itemPerPage })
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

    const getSerialNo = (index) => {
        return ((itemPerPage * (pageNo - 1)) + (index + 1))
    }

    return <>
        <Wrapper>
            <Button className='btn' {...addButtonProps} onClick={(e) => { handleAddCategory(e, 'ADD', {}) }} />
            <table id="hovered-table-id" className="table hovered-table-class">
                <tr>
                    <th>S.No</th>
                    <th>Category ID</th>
                    <th>Category Name</th>
                    <th>Action By</th>
                    <th>Action On</th>
                    <th>Actions</th>
                </tr>
                {props?.isLoading ? <Loader /> :
                    props?.categoryDetails?.categories && props?.categoryDetails?.categories?.length > 0 ? props?.categoryDetails?.categories?.map((value, index) => {
                        return <tr key={index}>
                            <td>{getSerialNo(index)}</td>
                            <td>{value._id}</td>
                            <td>{value.name}</td>
                            <td><span style={{ backgroundColor: "transparent", color: 'unset' }} title={value?.updatedBy?.email}>{value?.updatedBy?.name}</span></td>
                            <td>{dateService(value?.updatedAt)}</td>
                            <td onMouseEnter={(e) => updateHoverClass(e, 'REMOVE')} onMouseLeave={(e) => updateHoverClass(e, "ADD")}>
                                <Button className='btn' {...buttonProps} onClick={(e) => { handleAddCategory(e, 'EDIT', value) }} />
                            </td>
                        </tr>
                    })
                        :
                        <tr>
                            <td colSpan={6} style={{ textAlign: 'center' }}>No data found.</td>
                        </tr>

                }
            </table>
        </Wrapper>
        <CategoryForm show={showForm} handleClose={() => setShowForm(false)} catDetails={catDetails} updateCategoryRequest={props.updateCategoryRequest} page={pageNo} itemPerPage={itemPerPage} />
        <Paginations totalPages={props?.categoryDetails?.totalPages} pageClick={handlePageClick} />
    </>
}


const mapStateToProps = createStructuredSelector({
    categoryDetails: selectCategories(),
    isLoading: selectIsLoading(),
})

const mapDispatchToProps = dispatch => ({
    getCategoriesRequest: bindActionCreators(getCategoriesRequest, dispatch),
    updateCategoryRequest: bindActionCreators(updateCategoryRequest, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCategories)