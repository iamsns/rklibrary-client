import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTotalUsersRequest, signupRequest } from "../../redux/actions";
import { selectIsLoggedIn, selectTotalUsers } from "../../redux/selectors";
import Wrapper from "./styled";
import Link from "next/link";

const Signup = (props) => {
  const router = useRouter();
  if (props.isLoggedIn) {
    router.push('/')
  }
  const [inputData, setInputData] = React.useState({})
  const [totalUsers, setTotalUsers] = React.useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputData", inputData);
    props.signupRequest(inputData)
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  useEffect(() => {
    props.getTotalUsersRequest()
    setTotalUsers(props.totalUsers)
  }, [])

  return (
    <Wrapper>
      <div className="left-login">
        <img src="/images/signup_background.jpg" />
      </div>
      <div className="right-login">
        <h3 className="login-title">Read Amazing Content</h3>
        <h4 className="login-description">Create your free account and join {totalUsers}+ others enjoying using Rk library.</h4>
        <form onSubmit={handleSubmit} autoComplete="on">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={inputData?.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={inputData?.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
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
              placeholder="Enter Password"
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              id="password"
              name="confirmPassword"
              value={inputData?.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <br />
          <div>
            <button className="login-submit" type="submit" value="submit" style={{ marginRight: "10px" }}>
              Signup
            </button>
          </div>
        </form>
        <div className="privacy-note">By creating an account, I declare that I have read and accepted Rk library's Terms of Use and Privacy Policy .</div>
        <div className="bottom-links"><p>Have an account? <Link className="login-link" href="/login">Login</Link></p>
        </div>
      </div>

    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn(),
  totalUsers: selectTotalUsers(),
})

const mapDispatchToProps = dispatch => ({
  signupRequest: bindActionCreators(signupRequest, dispatch),
  getTotalUsersRequest: bindActionCreators(getTotalUsersRequest, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
