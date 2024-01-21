import styled from "styled-components";

const Wrapper = styled.div`
    color:gray;
    display:flex;
    min-height:91vh;
    font-family: Montserrat,sans-serif;
    .role-label {
        font-family: Open Sans,sans-serif;
        font-size: 18px;
    }    
    .login-box {
        text-align: left;
        box-shadow: 0 0 8px #a99595;
        margin: 40px auto 30px;
        border-radius: 10px;
        padding: 40px 45px;
        .login-title {
            margin: 0;
            color: #314152;
            margin-bottom: 12px;
            font-family: Montserrat,sans-serif;
            font-size: 21px;
            font-weight: 700;
        }
        .login-description {
            margin: 0;
            font-family: Lato,sans-serif;
            font-size: 18px;
            margin: 15px 0 30px;
            font-weight:500;
        }
        #email, #password, #name, #role {
            width:100%;
            background-color: transparent;
            border-width: 0;
            border-bottom: 1px solid #dae4ea;
            color: #717274;
            font-family: Open Sans,sans-serif;
            font-size: 18px;
            padding-bottom: 8px;
            outline:none;
            margin-bottom:10px;
        }
        #role {
            width:15px !important;
            margin-right:10px;
            margin-bottom:0;
            cursor:pointer;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px #f3f0ea inset !important;
            -webkit-text-fill-color: #717274 !important;
        }
        .login-submit {
            display: block;
            border:none;
            background-color: #3cacd7;
            border-radius: 6px;
            height: 46px;
            line-height: 46px;
            font-family: Lato,sans-serif;
            font-weight: 700;
            font-size: 17px;
            color: #f8fafb;
            width: 100%;
            cursor: pointer;
            -webkit-transition: all .15s ease-in-out;
            transition: all .15s ease-in-out;
        }
        .bottom-links {
            margin:0;
            margin-top: 10px;
            margin-bottom:0;
            font-family: Lato,sans-serif;
            font-size: 16px;
            color: #717274;
            a {
                color: #3bacd7;
            }
        }
        .privacy-note {
            font-family: Open Sans,sans-serif;
            font-size: 12px;
            color: #a0a5b8;
            line-height: 20px;
            margin-top: 10px;
        }
        .forgot-password, .signup-link {
            cursor:pointer;
            color: #3bacd7;
        }
    }

    @media screen and (min-width:450px) {
        .login-box {
            width: 400px;
        }
    }
    @media screen and (max-width:450px) {
        .login-box {
            width: 90%;
        }
    }
`;

export default Wrapper;