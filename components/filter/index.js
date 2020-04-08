import { useState } from 'react';
import styled from 'styled-components';

const FilterCont = styled.div`
    padding:20px;
`;

const FilterOptionValue = styled.div`
    padding-bottom:5px;
`

const FilterItemCont = styled.div`
    padding:10px;
    margin-bottom:20px;
    border:1px solid #ece9e9;
`;

const FilterItemTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
`;



const InputRadio = styled.div`
width   : 28px;
margin  : 0;
padding : 0;
opacity : 0;
`;
export default function Filter(props) {
    let filters = props.selectedFilters || {};
    const handleOptionChange = (event,key) => {
      
        props.showSelectedFilters({...filters,[key]:event.target.value});
    }


    return (
        <FilterCont>
            <FilterItemCont >
                <FilterItemTitle >Species</FilterItemTitle>
                <FilterOptionValue >

                    <label>
                        <input type="radio" value="Human"
                            checked={props.selectedFilters && props.selectedFilters['species'] === 'Human'}
                            onChange={(e)=>handleOptionChange(e,'species')} />
                           Human
                        </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value="Mytholog"
                            checked={props.selectedFilters && props.selectedFilters['species'] === 'Mytholog'}
                            onChange={(e)=>handleOptionChange(e,'species')} />
                           Mytholog
                    </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value=""
                            checked={props.selectedFilters && props.selectedFilters['species'] === ''}
                            onChange={(e)=>handleOptionChange(e,'species')} />
                            All
                        </label>
                </FilterOptionValue>

            </FilterItemCont>
            <FilterItemCont >
                <FilterItemTitle >Status</FilterItemTitle>
                <FilterOptionValue >

                    <label>
                        <input type="radio" value="alive"
                            checked={props.selectedFilters && props.selectedFilters['status'] === 'alive'}
                            onChange={(e)=>handleOptionChange(e,'status')} />
                           Alive
                        </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value="dead"
                            checked={props.selectedFilters && props.selectedFilters['status'] === 'dead'}
                            onChange={(e)=>handleOptionChange(e,'status')} />
                           Dead
                    </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value="unknown"
                            checked={props.selectedFilters && props.selectedFilters['status'] === 'unknown'}
                            onChange={(e)=>handleOptionChange(e,'status')} />
                            Unknown
                        </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value=""
                            checked={props.selectedFilters && props.selectedFilters['status'] === ''}
                            onChange={(e)=>handleOptionChange(e,'status')} />
                            All
                        </label>
                </FilterOptionValue>

            </FilterItemCont>
            <FilterItemCont >
                <FilterItemTitle >Gender</FilterItemTitle>
                <FilterOptionValue >

                    <label>
                        <input type="radio" value="Male"
                            checked={props.selectedFilters && props.selectedFilters['gender'] === 'male'}
                            onChange={(e)=>handleOptionChange(e,'gender')} />
                            Male
                        </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value="Female"
                              checked={props.selectedFilters && props.selectedFilters['gender'] === 'Female'}
                              onChange={(e)=>handleOptionChange(e,'gender')} />
                            Female
                    </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value="unknown"
                            checked={props.selectedFilters && props.selectedFilters['gender'] === 'unknown'}
                            onChange={(e)=>handleOptionChange(e,'gender')} />
                           Unknown
                        </label>
                </FilterOptionValue>
                <FilterOptionValue >
                    <label>
                        <input type="radio" value=""
                            checked={props.selectedFilters && props.selectedFilters['gender'] === ''}
                            onChange={(e)=>handleOptionChange(e,'gender')} />
                            All
                        </label>
                </FilterOptionValue>

            </FilterItemCont>
           
        </FilterCont>
    )
}