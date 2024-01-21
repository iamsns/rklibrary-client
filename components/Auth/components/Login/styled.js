import styled from "styled-components";

const Wrapper = styled.div`
    color:gray;
        display:flex;
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
                font-size: 32px;
                font-weight: 700;
            }
            .login-description {
                margin: 0;
                font-family: Lato,sans-serif;
                font-size: 28px;
                margin-bottom: 40px;
                text-align:center;
                font-weight:500;
            }
            #email, #password {
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
                display:flex;
                flex-direction:column;
                justify-content: space-between;
                margin-top: 10px;
                font-family: Lato,sans-serif;
                font-size: 16px;
                color: #717274;
                p {
                    a {
                        color: blue;
                        font-size:14px !important;
                        text-decoration: underline;
                    }
                    margin:0;
                }
            }
            .forgot-password, .signup-link {
                cursor:pointer;
                color: #3bacd7;
            }
        }

    @media screen and (min-width:400px) {
        .login-box {
            width: 330px;
        }
    }
    @media screen and (max-width:400px) {
        .login-box {
            width: 290px;
        }
    }
    .link {
        font-size:14px !important;
        text-decoration: underline;
        color: blue !important;
    }
`;


export default Wrapper;