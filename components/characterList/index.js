
import Tile from '../tile';
import styled from 'styled-components';

const CharacterBox = styled.div`
    min-height: 100px;
    position: relative;
    background-color: black;
    color: #fff;
`;
const CharacterCont = styled.div`
        display:flex;
        flex-wrap: wrap;
        background-color:#000;
        justify-content:space-around;
        padding:20px;

`;

const NoRecordsOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
`;

const TileCont = styled.div`
        flex-basis:23%;
      
        margin-bottom:-50px;
      
`;
export default function CharacterList(props) {
    let Characters = props.data
        && props.data.map((character, index) => <TileCont key={index} ><Tile data={character} /></TileCont>)
    return (
        <CharacterBox>
            {props.data.length ? <CharacterCont>{Characters}</CharacterCont> : <NoRecordsOverlay>No Records Found</NoRecordsOverlay>}
        </CharacterBox>

    )
}