import Header from "../components/header";
import CharacterList from '../components/characterList'
import { useState, useEffect } from 'react';
import { sortData } from '../utilities/util';
import Filter from '../components/filter';
import styled from 'styled-components';

const ApplicationCont = styled.div`
    display:flex;
    padding:20px;
`;

const SideContainer = styled.div`
    flex-basis:20%;
`;
const MainContainer = styled.div`
   flex-basis:80%;
   padding:20px;
`;

import { fetchCharacterList } from '../api';


export default function Index(props) {
    const [characterData, setCharacterData] = useState(props.characters.results);
    const [selectedFilters, setSelectedFilters] = useState();
    const [searchedText,setSearchedText]= useState();
    let initialCharacterData= [...props.characters.results];
   
    const deleteFilterKey = (key)=>{
        let filters = selectedFilters || {};
        if(filters[key]){
            filters[key]= "";
            fetchData(searchedText,filters);
            setSelectedFilters(filters);
        }
    }

    const fetchData = async(searchText,filters)=>{
        const res = await fetchCharacterList(getQuerySting(searchText,filters));
        const data = await res.json();
        let result = data.error ? [] :data.results;
        setCharacterData(result);
    }

    const getQuerySting =(searchText,filterparams)=>{
        let queryString = "";
        let selectedFiltersCopy = filterparams && {...filterparams} || {} ;
        
        if(searchText){
            selectedFiltersCopy.name = searchText;
        }
        let filters = Object.keys(selectedFiltersCopy).filter(filterKey => selectedFiltersCopy[filterKey] !== "");
        
        queryString = filters.map((filterKey)=> `${filterKey}=${selectedFiltersCopy[filterKey]}`).join('&');
        return queryString;
    }
    
    let searchText = (text) => {
        
        if (text == undefined || text.trim() == ""){
           setCharacterData(initialCharacterData);
        }
        else{
            
         fetchData(text.trim(),selectedFilters);   
        }
        setSearchedText(text.trim());
      
    }

    let handleSort = (sortType) => {

        let sortedData = sortData([...characterData], sortType);
        setCharacterData(sortedData);
    }

    let showSelectedFilters = async (params) => {

        fetchData(searchedText,params);
        setSelectedFilters(params);
    }

    return (

        <ApplicationCont>
            <SideContainer>
                <Filter selectedFilters={selectedFilters} showSelectedFilters={showSelectedFilters} data={characterData} />
            </SideContainer>
            <MainContainer>
                <Header deleteFilterKey={deleteFilterKey} selectedFilters={selectedFilters} searchText={searchText} handleSort={handleSort} data={characterData} />
                <CharacterList data={characterData} />
            </MainContainer>


        </ApplicationCont>

    )
}

Index.getInitialProps = async function () {
    const res = await fetchCharacterList();
    const data = await res.json();

    return { characters: data }
};
