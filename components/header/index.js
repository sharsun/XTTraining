import SearchBox from '../search';
import CharacterList from '../characterList';
import Sort from '../sort';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const SearchSortCont = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;

`;

const FilterCont = styled.div`
    margin-bottom:20px;
    :empty{
        margin-bottom:0;
    }
`;

const FilterItem = styled.div`
    padding:10px;
    display:inline-block;
    border-radius:10px;
    background-color:grey;
    color:#fff;
    margin-right:10px;
    position:relative;
    padding-right:30px;

`;

const CrossIcon = styled.div`
position: absolute;
right: 8px;
top: 8px;
cursor:pointer;

`;



export default function Header(props) {

    const onCrossIconClick = (event)=>{
        props.deleteFilterKey(event.target.getAttribute('data-key'));
     }
    const searchText = (text) => {
        props.searchText(text);
    }
    const handleSort = (sortType) => {
        props.handleSort(sortType);
    }



    return (<div>
        {props.selectedFilters
            && <FilterCont>{Object.keys(props.selectedFilters)
                .map((filterKey, index) => props.selectedFilters[filterKey] !== ""
                    ? <FilterItem key={index}>{filterKey.toUpperCase()}
                    :{props.selectedFilters[filterKey]}<CrossIcon data-key={filterKey} onClick={onCrossIconClick}>&#10006;</CrossIcon></FilterItem> : null)}
            </FilterCont>}
        <SearchSortCont>
            <SearchBox searchText={searchText} />
            <Sort handleSort={handleSort} />

        </SearchSortCont>


    </div>)
}