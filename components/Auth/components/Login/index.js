import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/actions";
import { selectIsLoggedIn } from "../../redux/selectors";

const Login = (props) => {

  const router = useRouter();
  const [inputData, setInputData] = React.useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inputData", inputData);
    await props.loginRequest(inputData)
    console.log("logged in")
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  useEffect(()=>{
    const isLog =  props.isLoggedIn || localStorage.getItem("isLoggedIn") === "true" ? true : false
    console.log("isLoggedIn", isLog)
    isLog && router.push("/")
  },[props.isLoggedIn])

  return (
    <>
      <form onSubmit={handleSubmit} autocomplete="on">
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputData?.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputData?.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <button type="submit" value="submit" style={{ marginRight: "10px" }}>
            Submit
          </button>
          <button type="reset" value="Reset">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn : selectIsLoggedIn()
})

const mapDispatchToProps = dispatch => ({
  loginRequest : bindActionCreators(loginRequest, dispatch ),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
