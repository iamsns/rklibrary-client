import styled from "styled-components";

const Wrapper = styled.div`
@media screen and (min-width:767px) {
    width:max-content;
    margin:auto;
    max-width: 80vw;
    display:flex;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height:100vh;
}

@media screen and (max-width:767px) {

}

`;
export default Wrapper;
