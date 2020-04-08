import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
width: 500px;
border-style: none;
border: 1px solid #ece9e9;
height: 30px;
padding: 0 10px;
font-size:14px;
::placeholder {
    color: #bfbfbf;
    font-style:italic;
    padding:0 10px;
  }

`;

const Button = styled.button`
    border-style: none;
    height: 34px;
    width: 80px;
    cursor: pointer;
`;

const SearchBox = styled.div`
position:relative;
`;
const CrossIcon = styled.div`
position: absolute;
right: 8px;
top: 5px;
cursor:pointer;
`;
export default function SearchComp(props) {

    const [text, setText] = useState();


    
    const handleUserKeyPress = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();

            props.searchText(text);

        }
        
    }

    const onCrossIconClick = ()=>{
        setText("");
        props.searchText("");
    }


    useEffect(() => {
        window.addEventListener('keyup', handleUserKeyPress);

        return () => {
            window.removeEventListener('keyup', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);




    let onChangeHandler = (event) => {
        
        setText(event.target.value);
        if(event.target.value.length >2){
            props.searchText(event.target.value);
        }
        else{
            props.searchText("");
        }
     
    }
    return (
        <SearchBox>

            <Input placeholder="Search By Name" type="text" value={text} onChange={onChangeHandler}/>
                   
        
            {text && text.length ? <CrossIcon onClick={onCrossIconClick}>&#10006;</CrossIcon> : null}
           
        </SearchBox>
    )
}