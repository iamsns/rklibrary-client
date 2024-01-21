import React from "react";
import { useRouter } from 'next/router'

import AuthService from "../../services/authService";
import { Wrapper, ErrorMessage } from "./styled";
import CryptoJS from 'crypto-js';
import Button from "../../shared/Button";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCategoriesRequest, updateBookRequest } from "../Book/redux/actions";
import ConfirmModal from "../../shared/Modal";
import { useEffect } from "react";
import { logoutSuccess } from "../Auth/redux/actions";
import cogoToast from "cogo-toast";
import { selectCategories } from "../Book/redux/selectors";
import { useRef } from "react";

const AddBook = (props) => {
  const router = useRouter()
  const { data } = router.query;

  const [bookData, setBookData] = React.useState({});
  const inputRef = useRef(null);
  const currentYear = new Date().getFullYear()

  const description = "<div style={{text-align:'center' !important}}><strong>Are you sure you want to proceed?<strong></div>"

  const [categories, setCategories] = React.useState([]);
  const checkedId = "CAT002"
  const [inputCategories, setInputCategories] = React.useState([]);
  const [firstTime, setFirstTime] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false)
  const [isOpenOptions, setIsOpenOptions] = React.useState(true)
  const [header, setHeader] = React.useState('Add New Book')
  const [submitButtonTitle, setSubmitButtonTitle] = React.useState('Submit')
  const buttonProps = {
    width: "160px",
    margin: "10px 0 0 15px",
    padding: "med"
  }
  const resetButtonProps = { ...buttonProps, background: '#e74c4c' }

  useEffect(() => {
    if (data) {
      decriptData(data)
    }
  }, [data])
  React.useEffect(() => {
    props.getCategoriesRequest({ itemPerPage: "ALL" })
  }, []);

  const decriptData = (book) => {
    const secretKey = process.env.SECRET_KEY
    const base64DecodedData = atob(book);
    const decryptedData = CryptoJS.AES.decrypt(base64DecodedData, secretKey);
    const decryptedString = decryptedData.toString(CryptoJS.enc.Utf8);
    const parsedData = JSON.parse(decryptedString);
    setInputCategories(parsedData.categories)
    parsedData.bookID = parsedData._id
    delete parsedData._id
    setHeader(parsedData.title)
    setSubmitButtonTitle('Update')
    setBookData(parsedData)
  }
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name == "edition" || name == "pages") {
      value = parseInt(value);
    }
    if (name == "categories") {
      let cats = inputCategories
      if (!e.target.checked && inputCategories.includes(value)) {
        setInputCategories(inputCategories.filter(val => val != value))
        cats = cats.filter(val => val != value)
      } else if (e.target.checked && !inputCategories.includes(value)) {
        cats.push(value)
        setInputCategories(cats)
      }
      value = cats;
    }
    if (name == 'title') {
      let slug = value.replaceAll(" ", "-").toLowerCase()
      setBookData({ ...bookData, [name]: value, ["slug"]: slug });
    } else {
      setBookData({ ...bookData, [name]: value });
    }
  };

  const resetData = () => {
    setFirstTime(true)
    const elementsWithClass = document.getElementsByClassName('main-input');
    for (const element of elementsWithClass) {
      element.classList.remove('input');
    }
    router.push('/add-book')
    setBookData()
    setInputCategories([])
  }
  const handleSubmit = (e) => {
    setFirstTime(false)
    const elementsWithClass = document.getElementsByClassName('main-input');
    for (const element of elementsWithClass) {
      element.classList.add('input');
    }
    e.preventDefault();

    if (!(bookData?.categories?.length > 0)) {
      cogoToast.error('Please select atlease one category!')
    } else if (!bookData.language) {
      cogoToast.error('Please select language!')
    } else {
      setShowConfirm(true)
    }
  };

  const confirmClicked = async () => {
    await props.updateBookRequest(bookData)
    setShowConfirm(false)
  }
  const toggleDropdown = () => {
  }

  return (
    <>
      <Wrapper>
        <div className="main-div">
          <h1 className="heading">{header}</h1>
          <hr style={{ margin: '0', opacity: '.35' }} />
          <form noValidate={firstTime} onSubmit={handleSubmit}>
            <div className="input-div">
              <label
                className="main-label" for="title">Title <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="text"
                id="title"
                name="title"
                value={bookData?.title}
                onChange={handleChange}
                placeholder="Enter Title"
                required
                minLength={3}
                maxLength={50}
                pattern="^[A-Za-z ]*$"
              />
            </div>
            <div className="input-div">
              <label className="main-label" for="author">Author <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="text"
                id="author"
                name="author"
                value={bookData?.author}
                onChange={handleChange}
                placeholder="Enter Author Name"
                required
                minLength={3}
                maxLength={30}
                pattern="^[A-Za-z ]*$"
              />
            </div>
            <div className="input-div" style={{ alignItems: 'flex-start' }}>
              <label className="main-label">Categories <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <div className="main-input categories-div">
                {props?.categoriesList?.categories?.map((category, index) => {
                  return <span key={index} style={{ marginRight: '10px', cursor: 'pointer' }}>
                    <input type="checkbox" id={category?._id} style={{ marginRight: '7px', cursor: 'pointer' }} name="categories" value={category?._id} onChange={handleChange} checked={bookData?.categories?.includes(category._id)} />
                    <label style={{ cursor: 'pointer' }} for={category?._id}> {category?.name}</label></span>
                })}
              </div>
            </div>
            <div className="input-div">
              <label className="main-label" for="edition">Edition <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="number"
                id="edition"
                name="edition"
                value={bookData?.edition}
                onChange={handleChange}
                placeholder="Enter Edition Year"
                required
                minLength={4}
                maxLength={4}
                pattern="^[1][5-9][0-9]{2}$"
                min={1500}
                max={currentYear}
              />
            </div>

            <div className="input-div">
              <label className="main-label" for="language">Language <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <select name="language" id="language" onChange={handleChange} value={bookData?.language} required style={bookData?.language == null ? { color: "grey" } : {}}>
                <option selected disabled={bookData?.language} value={null} style={{ color: 'grey' }}>Select Language</option>
                <option value="English" style={{ color: 'black' }}>English</option>
                <option value="Hindi" style={{ color: 'black' }}>Hindi</option>
              </select>
              {/* <input
            type="text"
            id="language"
            name="language"
            value={bookData?.language}
            onChange={handleChange}
          /> */}
            </div>
            <div className="input-div">
              <label className="main-label" for="pages">Pages <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="number"
                id="pages"
                name="pages"
                value={bookData?.pages}
                onChange={handleChange}
                placeholder="Enter pages"
                required
                minLength={2}
                maxLength={4}
                min={0}
                pattern="^[1-9][0-9]+$"
              />
            </div>
            {/* <div className="input-div">
              <label className="main-label" for="imageUrl">Image Url <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={bookData?.imageUrl}
                onChange={handleChange}
                placeholder="Enter image url"
              />
            </div> */}
            <div className="input-div">
              <label className="main-label" for="quantity">Quantity <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
              <input
                className="main-input"
                type="number"
                id="quantity"
                name="quantity"
                value={bookData?.quantity}
                onChange={handleChange}
                placeholder='Enter Quantity'
                required
                minLength={1}
                maxLength={3}
                min={0}
                pattern="^[1-9][0-9]+$"
              />

            </div>
            {/* <div className="input-div">
          <input
            type="text"
            id="description"
            name="description"
            value={bookData?.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div> */}
            <div className="buttons">
              {/* <button type="submit" value="submit" style={{ marginRight: "10px" }}>
            Submit
          </button> */}
              {/* <button type="reset" value="Reset" onClick={() => setBookData({})}>
            Reset
          </button> */}
              <Button type="reset" value="Reset" onClick={resetData} {...resetButtonProps} label="Reset" />
              <Button type="submit" value="submit" {...buttonProps} label={submitButtonTitle} />
            </div>
          </form>
        </div>
      </Wrapper>
      <ConfirmModal show={showConfirm} handleClose={() => setShowConfirm(false)} description={description} handleConfirm={confirmClicked} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  categoriesList: selectCategories()
})

const mapDispatchToProps = dispatch => ({
  updateBookRequest: bindActionCreators(updateBookRequest, dispatch),
  logoutSuccess: bindActionCreators(logoutSuccess, dispatch),
  getCategoriesRequest: bindActionCreators(getCategoriesRequest, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);