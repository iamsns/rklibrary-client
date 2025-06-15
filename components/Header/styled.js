import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  padding: 10px 20px 10px;
  border-bottom: 1px solid #d09a9a;
  background: #f6ebd0;
  color:black;
  position:sticky;
  top:0;

  .search-bar {
    display:inline;
    flex:1;
    .search-input {
      color:black;
      width: 60%;
      background: transparent;
      border-radius: 20px;
      padding: 6px 6px 6px 35px;
      outline:0;
    }
    .search-input::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 19px;
      width: 19px;
      margin-left: 1.4em;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
      cursor: pointer;
    }
    .search-icon {
      font-size: 16px;
      position: relative;
      left: 32px;
      top: 10px;
      background: #ffe07c;
      border: 1px solid grey;
      border-radius: 20px;
      padding: 7px;
    }
  }
  .nav-items {
    cursor:pointer;
    font-weight: 600;
    margin-right: 20px;
    // display:flex;
    &:hover {
      color: #3dc89f;
    }
  }
  .active {
    color: #3dc89f;
  }
  .auth-item {
    display: inline;
    position: absolute;
    right: 0px;
  }
`;
export default Wrapper;
