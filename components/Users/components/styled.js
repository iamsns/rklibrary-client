import styled from "styled-components";

const Wrapper = styled.div`
min-height:75vh;
width: 90vw;
margin: auto;
padding: 30px 0 1px;
.description {
    margin:auto;
    background:transparent !important;
}
.table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.table td, .table th {
    border: 1px solid #ddd;
    padding: 8px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table tr:hover {background-color: #ddd;}

.table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3dc89f;
    color: white;
}
`

const TableWrapper = styled.div`
    min-height:67vh;
`
const StatusWrapper = styled.span`
   background-color: transparent !important;
   color: ${props => props.status == 'PENDING' ? '#ed7b00' : props.status == 'REJECTED' || props.status == 'DEACTIVE' ? 'red' : props.status == 'ISSUED' ? 'green' : 'green'} !important;
   padding: 0 !important;
`
export { Wrapper, StatusWrapper, TableWrapper }