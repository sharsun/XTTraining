import styled from 'styled-components';
import {useState,useEffect} from 'react';

const Select = styled.div`
border: 1px solid #ece9e9;
width: 200px;
padding: 8px;

 cursor:pointer;

`;

const SortCont = styled.div`
    position:relative;

`;

const DropDownCaret = styled.div`
    float:right;
    font-size:14px;
`;

const Options = styled.div`
    position:absolute;
   display:${props => props.isOpen ? 'block' :'none'};
    background-color:#fff;
    width:216px;
    top:35px;
    div{
        cursor:pointer;
        padding:10px 10px 10px 10px;
        border-bottom:1px solid #ece9e9;
    }
    z-index:2;
    border:1px solid #ece9e9;
`;
export default function Sort(props) {
 
    const [isOpen, setIsOpen] = useState(false);
    const [sortType,setSortType]= useState('Asc')
    const [dropdownCaret,setDropDownCaret] = useState('&#9660;');

    let handleChange = (event) => {
        props.handleSort(event.target.getAttribute('data-value'))
        setIsOpen(false);
        setDropDownCaret('&#9660;');
        setSortType(event.target.getAttribute('data-value'));
    }

    let onClickHandler = (event)=>{
    
        setIsOpen(!isOpen);
        setDropDownCaret(!isOpen ? '&#9650;' :'&#9660;');
      
    }

   
    return (
    
    <SortCont>
        <Select  value='none' className='' onClick={onClickHandler} >
             <strong>{`Sort By Id: ${sortType}`}</strong>
          <DropDownCaret dangerouslySetInnerHTML={{__html:dropdownCaret}}></DropDownCaret>
  
        </Select>
        <Options isOpen={isOpen}>
              
              <div  onClick={handleChange} data-value='Asc'>Ascending</div>
              <div onClick={handleChange}  data-value='Desc'>Descending</div>
          </Options>
    </SortCont>)
}