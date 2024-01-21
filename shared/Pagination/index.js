import Pagination from 'react-bootstrap/Pagination';
import Wrapper from './styled';
import { useEffect, useState } from 'react';
import { PageItem } from 'react-bootstrap';

const Paginations = (props) => {
    const [active, setActive] = useState(1)
    const [items, setItems] = useState([])
    const [totalPages, setTotalPages] = useState(props?.totalPages)

    useEffect(() => {
        if (props?.totalPages == undefined || props?.totalPages == null) {
            setTotalPages(0)
        } else {
            setTotalPages(props.totalPages)
        }
    }, [props])

    useEffect(() => {
        if (totalPages) {
            let startEnd = getStartEnd(1)
            updatePages(startEnd.start, startEnd.end, 1)
        }
    }, [totalPages])

    const updatePages = (start, end, active) => {
        let tempItems = []
        for (let number = start; number <= end; number++) {
            tempItems.push(
                <PageItem onClick={(e) => handleClick(e, number)} key={number} active={number === active}>
                    {number}
                </PageItem>,
            );
        }
        setItems(tempItems)
    }

    const handleClick = async (event, page) => {
        if (page > 0 && page <= totalPages) {
            props.pageClick(page)
            setActive(page)
        }

        let startEnd = await getStartEnd(page)
        updatePages(startEnd.start, startEnd.end, page)
    }

    const getStartEnd = (active) => {
        if (totalPages < 6) {
            return { start: 1, end: totalPages }
        } else {
            if (active < 4) {
                return { start: 1, end: 5 }
            } else if (active + 2 >= totalPages && active >= 4) {
                return { start: totalPages - 4, end: totalPages }
            } else if (active >= 4 && active + 2 < totalPages) {
                return { start: active - 2, end: active + 2 }
            }
        }
    }
    return (
        <Wrapper>
            <Pagination>
                <Pagination.Prev disabled={active == 1} linkStyle={active == 1 ? {cursor:'not-allowed !important'}:{}} onClick={(e) => handleClick(e, active - 1)}>Prev</Pagination.Prev>
                {items}
                <Pagination.Next disabled={active == totalPages || !totalPages} linkStyle={active == totalPages || !totalPages ? {cursor:'not-allowed'}:{}} onClick={(e) => handleClick(e, active + 1)}>Next</Pagination.Next>
            </Pagination>
        </Wrapper>
    )
}
export default Paginations;
