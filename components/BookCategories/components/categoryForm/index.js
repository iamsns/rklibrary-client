import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormInput } from './styled';
import cogoToast from 'cogo-toast';

function CategoryForm(props) {
    const [submitLabel, setSubmitLabel] = useState('Submit')
    const [inputData, setInputData] = useState({})
    const [header, setHeader] = useState('Add New Category')

    useEffect(() => {
        if (props.catDetails?.name) {
            setInputData(props.catDetails)
            setHeader(props.catDetails?.name)
            setSubmitLabel('Update')
        } else {
            setInputData({ name: '' })
            setSubmitLabel('Submit')
            setHeader('Add New Category')
        }
    }, [props])

    const handleChange = (e) => {
        setInputData({ ...inputData, 'name': e.target.value })
    }

    const handleSubmit = async () => {
        if (inputData.name && inputData?.name != '' && inputData?.name?.length >= 3 ) {
            props.updateCategoryRequest({inputData:inputData, pagination:{page:props.page, itemPerPage:props.itemPerPage}})
            props.handleClose()
        } else {
            cogoToast.error(inputData?.name == undefined || inputData?.name == null || inputData?.name == '' ? 'Please fill in required field.' : 'Category name must contains atlease three lettters!')
        }
    }

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            centered
            size='md'
            keyboard={false}
        >
            <Modal.Header style={{
                justifyContent: "center",
                alignItems: "center",
            }}  >
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>Category Name<span style={{ color: 'red' }}>*</span> :&nbsp;</label>
                    <FormInput type='text' name onChange={handleChange} value={inputData.name} placeholder='Enter category name' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" type='reset' onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {submitLabel}
                </Button>

            </Modal.Footer>
        </Modal>
    );
}

export default CategoryForm;