import React from "react";
import Wrapper from "./styled";
import { useRouter } from "next/router";
import AuthService from "../../services/authService";

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = React.useState(false)
  const currentRoute = router.pathname;
  const handleLogout = (e) => {
    localStorage.clear();
    router.push('/login')
  };
  React.useEffect(()=>{
    console.log('localStorage.getItem("isLoggedIn") === "true"', localStorage.getItem("isLoggedIn") === "true")
    setIsloggedIn(localStorage.getItem("isLoggedIn") === "true")
  },[])
  return (
    <>
      <Wrapper route={currentRoute}>
        <a
          className={currentRoute == "/" ? "active nav-items" : "nav-items"}
          href="/"
        >
          Home
        </a>
        <a
          className={
            currentRoute == "/books" ? "active nav-items" : "nav-items"
          }
          href="/books"
        >
          Books
        </a>
        <a
          className={
            currentRoute == "/add-book" ? "active nav-items" : "nav-items"
          }
          href="/add-book"
        >
          Add Book
        </a>
        <div className="auth-item">
          <a
            className={
              currentRoute == "/signup" ? "active nav-items" : "nav-items"
            }
            href="/signup"
          >
            Signup
          </a>
          <a className="nav-items">Cart</a>
          {!isLoggedIn ? (
            <a
              className={
                currentRoute == "/login" ? "active nav-items" : "nav-items"
              }
              href="/login"
            >
              Login
            </a>
          ) : (
            <a className="nav-items" onClick={handleLogout}>
              Logout
            </a>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
