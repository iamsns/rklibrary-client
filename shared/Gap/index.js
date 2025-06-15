import styled from "styled-components"

const Gap = (props) => {
    return (
        <Wrapper {...props}></Wrapper>
    )
}

const Wrapper = styled.div`
    height:0.5px;
    background:gray;
    margin:15px 0;
`
export default Gap;