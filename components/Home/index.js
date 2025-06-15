import React from "react";
import Welcome from "./components/Welcome/index";
import Wrapper from "./styled";
const Home = () => {
  return (
    <Wrapper >
      {/* <h1 className="welcome-note">Welcome To RK Library</h1> */}
      <Welcome />
      {/* <img src="https://backoffice.vo-group.be/media/vo-citizen-staging/210/agence.png" />
      <img src="https://s3.amazonaws.com/easel.ly/assets/website/infographicbusiness/v2/ic-why-rely-4.svg" /> */}
    </Wrapper>
  );
};

export default Home;
