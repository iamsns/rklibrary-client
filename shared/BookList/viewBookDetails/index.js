import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewBookDetails(props) {
    const bookDetails = props.data
    console.log("view Details", bookDetails);
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
                <Modal.Title>{bookDetails.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <img src={bookDetails?.imageGallery[0]}/> */}
                <table>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Title :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails.title}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Author :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails.author}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Edition :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails.edition}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Language :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails.language}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Pages :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails.pages}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Genre :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails?.category?.map((val, index) => { return <span>{index > 0 ? ', ' : null}{val.name}</span> })}</td>
                    </tr>
                    <tr>
                        <td style={{ float: 'right', fontSize: '17px' }}>Status :&nbsp; </td>
                        <td style={{ fontWeight: '500', paddingLeft: '10px', fontSize: '18px' }}>{bookDetails?.quantity > 0 ? <span style={{ 'background-color': 'transparent', 'color': 'green', 'padding': '0' }}>AVAILABLE</span> : <span style={{ 'background-color': 'transparent', 'color': 'red', 'padding': '0' }}>NOT AVAILABLE</span>}</td>
                    </tr>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewBookDetails;