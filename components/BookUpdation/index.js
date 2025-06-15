import React from "react";
import { useRouter } from 'next/router'

import AuthService from "../../services/authService";
import Wrapper from "./styled";
import Button from "../../shared/Button";

const AddBook = () => {
  const router = useRouter()
  const [bookData, setBookData] = React.useState({});

  const [categories, setCategories] = React.useState([]);
  const [inputCategories, setInputCategories] = React.useState([]);
  const buttonProps = {
    width: "45%",
    margin: "10px 10px 0",
    padding: "med"
  }
  React.useEffect(() => {
    AuthService.getJsonData("get-categories")
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          setCategories(res?.data?.categories);
        }
      })
      .catch((err) => {
        // console.log("error categories", err);
        if (err?.response?.status == 401) {
          router.push('/login')
        }
      });
    setInputCategories([])
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("bookDatasubmit", bookData);
    AuthService.postJsonData('edit-book', bookData).then(res => {
      // console.log(res)
      if (res.status == 201) {
        router.push('/')
      }
    }).catch(err => {
      // alert("error in adding")
      // console.log(err)
    })
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(value, e.target.checked);
    if (e.target.name == "edition" || e.target.name == "pages") {
      value = parseInt(value);
    }
    if (e.target.name == "categories") {
      let cats = inputCategories
      if (!e.target.checked && inputCategories.includes(value)) {
        setInputCategories(inputCategories.filter(val => val != value))
        cats = cats.filter(val => val != value)
      } else if (e.target.checked && !inputCategories.includes(value)) {
        cats.push(value)
        setInputCategories(cats)
      }
      value = cats;
      name
    }
    setBookData({ ...bookData, [name]: value });
  };

  return (
    <Wrapper>
      <div className="main-div">
        <h1 className="heading">Add New Book</h1>
        <hr style={{margin:'0', opacity:'.35'}} />
        <form onSubmit={handleSubmit}>
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
            />
          </div>
          <div className="input-div" style={{ alignItems: 'flex-start' }}>
            <label className="main-label">Categories <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
            {/* <select  className="select" data-mdb-filter="true" name="categories" id="categories" multiple onChange={handleChange} onFocus={()=>// console.log("focus")}>
            <option selected disabled value="" style={{borderBottom:"1px solid #958e8e",paddingBottom: "5px", marginBottom: "5px"}}>Select Categories &#x2772; use ctrl &#x2773;</option>
            {categories?.map((category, index) => {
              return <option key={index} value={category?.id}>{category?.name}</option>
            })}
          </select> */}
            <div className="cat-div">

              {categories?.map((category, index) => {
                return <span key={index} style={{ marginRight: '10px', cursor: 'pointer' }}><input name="categories" style={{ marginRight: '7px', cursor: 'pointer' }} type="checkbox" id={category?.id} value={category?.id} onChange={handleChange} />
                  <label style={{ cursor: 'pointer' }} for={category?.id}> {category?.name}</label></span>
                {/* return <option key={index} value={category?.id}>{category?.name}</option> */ }
              })}
            </div>
          </div>
          <div className="input-div">
            <label className="main-label" for="slug">Slug <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
            <input
              className="main-input"
              type="text"
              id="slug"
              name="slug"
              value={bookData?.slug}
              onChange={handleChange}
              placeholder="Enter book url"
            />
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
            />
          </div>

          <div className="input-div">
            <label className="main-label" for="language">Language <span style={{ color: 'red' }}>&nbsp;*</span> &nbsp;: </label>
            <select name="language" id="language" onChange={handleChange}>
              <option selected disabled value="" style={{ color: 'grey' }}>Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
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
            />
          </div>
          <div className="input-div">
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
          </div>
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
            <Button type="submit" value="submit" {...buttonProps} title="Submit" />
            <Button type="reset" value="Reset" onClick={() => setBookData({})} {...buttonProps} title="Reset" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddBook;
