import React from "react";
import { useRouter } from 'next/router'

import AuthService from "../../../services/authService";
import cogoToast from "cogo-toast";

const AddBook = () => {
    const router = useRouter()
  const [bookData, setBookData] = React.useState({});

  const [categories, setCategories] = React.useState([]);
  let [checkedCategories, setCheckedCategories] = React.useState([]);

  React.useEffect(() => {
    AuthService.getJsonData("/get-categories")
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setCategories(res?.data?.categories);
        } 
      })
      .catch((err) => {
        console.log("error categories", err);
        if (err?.response?.status == 401) {
          router.push('/login')
        }
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookData);
    AuthService.postJsonData('/edit-book', bookData).then(res => {
        console.log(res)
        if (res.status == 201) {
          cogoToast.success("Book added successfully!")
            router.push('/')
        }
    }).catch(err => {
        // alert("error in adding")
        console.log(err)
    })
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    let updatedCheckedCategories = checkedCategories
    if (e.target.name == "edition" || e.target.name == "pages") {
      value = parseInt(value);
    }
    if (e.target.name == "categories") {
      if (e.target.checked) {
        setCheckedCategories([...checkedCategories, value]);
        updatedCheckedCategories.push(value);
      } else {
        updatedCheckedCategories = checkedCategories?.filter(
          (cat) => cat != value
        );
        setCheckedCategories(updatedCheckedCategories);
      }
      value = updatedCheckedCategories;
    }
    console.log(value);
    setBookData({ ...bookData, [e.target.name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData?.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label for="author">Author : </label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData?.author}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Categories : </label>
          {categories?.map((category, index) => {
            return (
              <>
                <input
                  type="checkbox"
                  step="0.01"
                  name="categories"
                  value={category?.id}
                  onChange={handleChange}
                />
                <label style={{ marginRight: "15px" }}>{category?.name}</label>
              </>
            );
          })}
        </div>
        <br />
        <div>
          <label for="edition">Edition : </label>
          <input
            type="number"
            id="edition"
            name="edition"
            value={bookData?.edition}
            onChange={handleChange}
            placeholder="Enter a year"
          />
        </div>
        <br />

        <div>
          <label for="language">Language : </label>
          <input
            type="text"
            id="language"
            name="language"
            value={bookData?.language}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label for="pages">Pages : </label>
          <input
            type="number"
            id="pages"
            name="pages"
            value={bookData?.pages}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label for="description">Description : </label>
          <input
            type="text"
            id="description"
            name="description"
            value={bookData?.description}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <button type="submit" value="submit" style={{ marginRight: "10px" }}>
            Submit
          </button>
          <button type="reset" value="Reset" onClick={()=>setBookData({})}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
