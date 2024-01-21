import styled from "styled-components";

const Wrapper = styled.div`
    .input:valid {
        border: 1px solid green !important;
    }

    .input:invalid{
        border: 1px solid red !important;
        color: red !important; 
    }

    max-width:450px;
    min-width:440px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .heading {
        font-size: 25px;
        width: max-content;
        margin: auto;
        padding:13px 0;
        font-weight: 700;
        color: #396885 !important;
    }
    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
      }
      
      /* For Internet Explorer 10+ */
      select::-ms-expand {
        display: none;
      }
      .categories-div {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 100px;
      }
      .main-div {
        box-shadow: 0px 0px 8px grey;
        border-radius: 20px;
    }
    width: 50vw;
    margin: auto;
    padding: 50px 0;
    form {
        padding: 20px;
        justify-content: space-between;
        align-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        .input-div {
            display: flex;
            margin:15px 0;
            .main-label {
                margin-right:10px;
                float:left;
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        }
        .main-input, select {
            width:80%;
            background: #f9f9f9;
            color: black;
            padding: 5px 10px;
            font-size: 16px;
            border-radius: 5px;
            outline: none;
            border: 1px solid #c7b8b8;
        }
        select {
            cursor:pointer;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1em;
        
        }
        .buttons {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
    @media screen and (min-width:767px) { 
      
    }

    @media screen and (max-width:767px) {

    }
`;
const ErrorMessage = styled.span`
  /* Add your error message styles here */
  color: red;
  font-size: 14px;
  display: block; /* Make each error message appear on a new line */
  margin-top: 5px; /* Add some spacing between input and error message */
`;

export { Wrapper, ErrorMessage };