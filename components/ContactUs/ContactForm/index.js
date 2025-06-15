import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Wrapper } from './styled'
import AuthService from '../../../services/authService';
import toast from 'react-hot-toast';

function ContactForm(props) {
    const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.postJsonData('contact-us', formData).then(res => {
            if (res.data.status == 201) {
                toast.success("Your query is successfully submitted.")
                setFormData({})
                props.handleClose()
            } else if (res.data.status == 422) {
                console.log(res.data.errors);
                toast.error(hasErrors(res.data.errors))
            }
        }).catch(err => {
            console.log('error is contact us form', err)

        })
    };

    const hasErrors = (errors) => {
        for (const prop in errors) {
            return errors[prop]
        }
    }

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData({ ...formData, [name]: value });
    };
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
                <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="input-div">
                            <label
                                className="main-label" for="name">Name <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
                            <input
                                className="main-input"
                                type="text"
                                id="name"
                                name="name"
                                value={formData?.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="input-div">
                            <label className="main-label" for="email">Email <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
                            <input
                                className="main-input"
                                type="text"
                                id="email"
                                name="email"
                                value={formData?.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input-div">
                            <label className="main-label" for="subject">Subject <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
                            <input
                                className="main-input"
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData?.subject}
                                onChange={handleChange}
                                placeholder="Enter subject"
                            />
                        </div>
                        <div className="input-div">
                            <label className="main-label" for="message">Messsage <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
                            <textarea rows="4" cols="50"
                                className="main-input"
                                id="message"
                                name="message"
                                value={formData?.message}
                                onChange={handleChange}
                                placeholder="Enter your message">
                            </textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='reset' variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' onClick={handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </form>
            </Wrapper>
        </Modal>
    );
}

export default ContactForm;