import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const decreace = () => {
        let page = +(query.get('page') || '1')
        let nextPage = page - 1
        setQuery({page: nextPage.toString()})
    }

    const increace = () => {
        let page = +(query.get('page') || '1')
        let nextPage = page + 1
        setQuery({page: nextPage.toString()})
    }

    return (
        <div>
            <button onClick={decreace}>prev</button>
            <button onClick={increace}>next</button>
        </div>
    );
};

export default PaginationComponent;
