import styled from "styled-components"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return <Wrapper>
    <p>&copy; {currentYear} Rk Library. All Rights Reserved.</p>
  </Wrapper>
}

export default Footer

const Wrapper = styled.footer`
    border-top: 1px solid orange;
    margin:0;
    background: #0e916a;
    color: white;
    p{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      margin:0px;
    }

`