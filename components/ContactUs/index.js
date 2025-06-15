import React from "react";
import ContactForm from "./ContactForm";
import Wrapper from "./styled";

const ContactUs = () => {

  const [showForm, setShowForm] = React.useState(false)

  return <Wrapper>
    <div className="main-div">
      <h1 className="main-heading">Contact Us</h1>
      <hr />
      <div className="sub-div">
        {/* <h2 className="sub-heading">Who are we</h2> */}
        <p className="paragraph">Rk Library - Your Gateway to Knowledge
          Welcome to Rk Library, where books come to life and knowledge knows no bounds. We're here to assist you with your literary journey and answer any questions you might have. Feel free to reach out using the following contact methods:</p>
      </div>
      <div className="sub-div">
        <div style={{ marginBottom: '10px' }}>Contact Information:</div>
        <h2 className="sub-heading">Rk Library</h2>
        <p className="paragraph">478, First Floor,Main Baazaar,<br /> Chhattargarh, Bikaner, Rajasthan (334021)<br />
          Phone: 8385871449<br />
          Email: <a href="mailto:info@rklibrary.com" style={{ color: 'rgba(41,100,170,1)' }}>info@rklibrary.com</a></p>
      </div>
      <div className="sub-div">
        <p>Have a Question or Feedback?</p>
        <p className="paragraph">We're here to help! Whether you have a query about a specific book, need assistance with research, or simply want to share your thoughts, we're just a message away.</p>
      </div>
      <div className="sub-div">
        <h2 className="sub-heading">Ways to Connect:</h2>
        <p className="paragraph">
          <ul>
            <li><strong>Phone:</strong> Call our knowledgeable librarians at 9076987667 during our operational hours.</li>
            <li><strong>Email: </strong>Shoot us an email at <a href="mailto:info@rklibrary.com" style={{ color: 'rgba(41,100,170,1)' }}>info@rklibrary.com</a>, and we'll respond within 24 hours.</li>
            <li><strong>Visit Us: </strong>Stop by our physical location to browse our extensive collection and talk to our friendly staff. Check our Hours of Operation before planning your visit.</li>
            <li><strong>Online Form: </strong> Prefer digital communication? Fill out the form by <span style={{ color: 'rgba(41,100,170,1)', cursor: 'pointer' }} onClick={() => setShowForm(true)}>click here</span>, and we'll get back to you as soon as possible.</li>
          </ul>
        </p>
      </div>
      <div className="sub-div">
        <p style={{ marginBottom: '10px' }}>Stay Connected:</p>
        <p className="paragraph">Follow us on social media to stay in the loop about book releases, reading challenges, and community events:</p>
        <p><ul><li><a href="https://www.facebook.com/" style={{ color: 'rgba(41,100,170,1)' }} target="_blank">Facebook</a> | <a href="https://www.instagram.com/" style={{ color: 'rgba(41,100,170,1)' }} target="_blank">Instagram</a> | <a href="https://twitter.com/" style={{ color: 'rgba(41,100,170,1)' }} target="_blank">Twitter</a></li></ul></p>
      </div>
      <div className="sub-div">
        <p className="paragraph">Thank you for being a part of Rk Library, where every page turns into an adventure. We appreciate your feedback, questions, and enthusiasm for the world of books!</p>
      </div>
    </div>
    <ContactForm show={showForm} handleClose={() => setShowForm(false)} />
  </Wrapper>
}

export default ContactUs;