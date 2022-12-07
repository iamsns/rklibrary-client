import React from "react";
import Wrapper from "./styled";
import { useRouter } from "next/router";
import AuthService from "../../services/authService";
import Link from 'next/link'

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsloggedIn] = React.useState(false)
  const currentRoute = router.pathname;
  const handleLogout = (e) => {
    localStorage.clear();
    router.push('/login')
  };
  React.useEffect(() => {
    console.log('localStorage.getItem("isLoggedIn") === "true"', localStorage.getItem("isLoggedIn") === "true")
    setIsloggedIn(localStorage.getItem("isLoggedIn") === "true")
  }, [])
  return (
    <>
      <Wrapper route={currentRoute}>
        <span className={currentRoute == "/" ? "active nav-items" : "nav-items"}>

          <Link
            className={currentRoute == "/" ? "active nav-items" : "nav-items"}
            href="/"
          >
            Home
          </Link>
        </span>
        <span className={
          currentRoute == "/books" ? "active nav-items" : "nav-items"
        }>
          <Link

            href="/books"
          >
            Books
          </Link>
        </span>
        <span className={
          currentRoute == "/add-book" ? "active nav-items" : "nav-items"
        }>
          <Link

            href="/add-book"
          >
            Add Book
          </Link>
        </span>
        <div className="auth-item">
          <span className={
            currentRoute == "/signup" ? "active nav-items" : "nav-items"
          }>
            <Link

              href="/signup"
            >
              Signup
            </Link>
          </span>
          <span className="nav-items">
            <Link href="#" >Cart</Link>
          </span>
          {!isLoggedIn ? (
            <span className={
              currentRoute == "/login" ? "active nav-items" : "nav-items"
            }>
              <Link

                href="/login"
              >
                Login
              </Link>
            </span>

          ) : (
            <span className="nav-items" >
              <Link className="nav-items" href="#" onClick={handleLogout}>
                Logout
              </Link>
            </span>

          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
