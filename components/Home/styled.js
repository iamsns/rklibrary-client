import styled from "styled-components";

const Wrapper = styled.div`
    background-color : #eee7d8;
    // background-image: url(images/home-background.jpg);
    background-size: cover;
    @media screen and (min-width:767px) { 
        min-height:80vh;
        text-align:center;
        .welcome-note {
            color:black;
            margin:0;
            padding:25% 0;
            font-size: 4rem;
        }
    }

    @media screen and (max-width:767px) {

    }

`;
export default Wrapper;
