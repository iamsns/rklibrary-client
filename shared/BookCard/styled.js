import styled from "styled-components";

const Wrapper = styled.div`
padding: 15px 20px 15px;
margin-bottom: 10px;
border: 1px solid grey;
background: grey;
.nav-items {
  cursor:pointer;
  margin-right: 20px;
  &:hover {
    color: #7bfaff;
  }
}
.active {
  color: #00f6ff;
}
.auth-item {
  display: inline;
  position: absolute;
  right: 0px;
}
.card-image {
  min-height: 250px;
  max-height: 250px;
}
@media screen and (min-width:767px) {
  width:220px;
 
}

@media screen and (max-width:767px) {

}

`;
export default Wrapper;
