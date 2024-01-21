import styled from "styled-components";

const Wrapper = styled.div`
    color:red !important;
    width:max-content;
    height:50px;
    margin:auto;
    .page-link {
        color:grey;
        background:transparent;
    }
    .page-link:hover {
        color:white;
        background-color: #73cbb1;
        border-color:#73cbb1;
    }
    .page-item:not(:first-child):not(:last-child) {
        width:43px;
        text-align:center;
    }
    background-color: var(--bs-pagination-active-bg);
    .active>.page-link, .page-link.active {
        z-index: 3;
        color: white;
        background-color: #3dc89f;
        border-color:#3dc89f;
    }
`

export default Wrapper