import styled from "styled-components";

const Wrapper = styled.button`
  cursor:pointer;
  font-family: Lato,sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.color ? props.color: "#f8fafb"} !important;;
  -webkit-transition: all .15s ease-in-out;
  transition: all .15s ease-in-out;
  background-color: ${props => props.background ? props.background: "#3cacd7"} !important;
  border:none;
  
  @media screen and (min-width:767px) {
    border-radius:${props => props.type == "tablet" ? "25px" : "6px"};
    width:${props => props?.width ? props?.width : null};
    padding:${props => props?.padding == "min" ? "5px 8px" : props?.padding == "med" ? "8px 15px"  : "15px 25px"};
    margin:${props => props?.margin ? props?.margin : null};
  }

  @media screen and (max-width:767px) {

  }

`;
export default Wrapper;
