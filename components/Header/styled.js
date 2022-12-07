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
`;
export default Wrapper;
