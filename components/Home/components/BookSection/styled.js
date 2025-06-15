import styled from "styled-components";

const Wrapper = styled.div`
    @media screen and (min-width:767px) { 
        flex-grow: 1;
        .book-image { 
            height: 100%;
            width: 60%;
            border-radius: 20px;
        }
    }

    @media screen and (max-width:767px) {

    }

`;
export default Wrapper;
