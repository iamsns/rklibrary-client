import styled from "styled-components";

const Wrapper = styled.div`
    color:black;
    .description {
        text-align: left;
        margin: 10px 0;
        font-size: 14px;
        font-weight: 500;
        width: 300px;
        font-family: unset;
    }
    margin: 3rem auto;
    @media screen and (min-width:767px) { 
        .upper-part {
            text-align: left;
        } 
        .first-row {
         
        }
        .how-it-works {
            margin-left:5%;
            display: inline-flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            font-family: unset;
        }
        .second-row {
            display:flex;
            // margin-left:3vw;
            .vertical-text {
                writing-mode: vertical-lr;
                transform: rotateZ(180deg);
                letter-spacing: -0.9px;
                margin-right: 10px;
                border-right: 2px solid #fdd690;
            }
        }
        .get-your-image {
            width: 94px;
            height: 40px;
            position: relative;
            top: 11px;
        }
        .upper-main-text {
            font-size: 3rem;
            font-weight: 700;
        }
        .collection-side-image {
            width:35px;
            margin-right:10px;
        }
    }

    @media screen and (max-width:767px) {

    }

`;
export default Wrapper;
