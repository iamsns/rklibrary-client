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
  if (props.isLoggedIn) {
    router.push('/')
  }
  const [inputData, setInputData] = React.useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(inputData)
    setTimeout(() => {
      setInputData({email:'', password:''})
    }, 800);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  return (
    <Wrapper>
      <div className="login-box">
        <h4 className="login-description">Welcome back</h4>
        <form onSubmit={handleSubmit} autoComplete="on">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={inputData?.email}
              onChange={handleChange}
              placeholder="Email"
              required
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
              required
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
          <p className="new-to-library">New to library? <Link className="signup-link link" href="/signup">Register</Link></p>
          <p className="forgot-password link">Forgot Password</p>
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