import React from "react";
import Wrapper from "./styled";
import { useRouter } from "next/router";
import { createStructuredSelector } from "reselect";
import { selectIsLoggedIn, selectUserDetails } from "../Auth/redux/selectors";
import { connect } from "react-redux";
import SearchBar from "./componets/searchBar";
import SiteLogo from "./componets/Sitelogo";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./componets/Navbar/index"), { ssr: false });
const RightHeader = dynamic(() => import("./componets/rightHeader"), { ssr: false });

const Header = (props) => {
  const {isLoggedIn} = props
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>

      <Wrapper route={currentRoute}>
        <SiteLogo />
        <Navbar {...props}/>
        {/* <SearchBar /> */}
        <RightHeader currentRoute={currentRoute} />
      </Wrapper>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoggedIn : selectIsLoggedIn(),
  userDetails:selectUserDetails()
})

export default connect(mapStateToProps)(Header);

