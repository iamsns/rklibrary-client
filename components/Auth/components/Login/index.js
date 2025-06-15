import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/actions";
import { selectIsLoggedIn } from "../../redux/selectors";
import Wrapper from "./styled";
import Link from "next/link";

const Login = (props) => {

  const router = useRouter();
  // console.log("route prev", router)
  if (props.isLoggedIn) {
    router.push('/')
  }
  const [inputData, setInputData] = React.useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("inputData", inputData);
    await props.loginRequest(inputData)
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  useEffect(() => {
    const isLog = props.isLoggedIn || localStorage.getItem("isLoggedIn") === "true" ? true : false
    // console.log("props.isLoggedIn", props.isLoggedIn)
  }, [props.isLoggedIn])

  return (
    <Wrapper>
      <div className="left-login">
        <img src="/images/login_background.jpg" />
      </div>
      <div className="right-login">
        <h3 className="login-title">Read Amazing Content</h3>
        <h4 className="login-description">Welcome back! Please use your email to sign in.</h4>
        <form onSubmit={handleSubmit} autoComplete="on">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={inputData?.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={inputData?.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <br />
          <div>
            <button className="login-submit" type="submit" value="submit" style={{ marginRight: "10px" }}>
              Login
            </button>
          </div>
        </form>
        <div className="bottom-links">
          <p className="new-to-library">New to library? <Link className="signup-link" href="/signup">Register</Link></p>
          <p className="forgot-password">Forgot Password</p>
        </div>
      </div>

    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn()
})

const mapDispatchToProps = dispatch => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
