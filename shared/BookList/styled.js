import styled from "styled-components";

const Wrapper = styled.div`
@media screen and (min-width:767px) {
    width:max-content;
    margin:auto;
    padding:2vh 0 2vh;
    max-width: 90vw;
    display:flex;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    min-height:75vh;
}

@media screen and (max-width:767px) {

}

`;
export default Wrapper;
