import styled from 'styled-components';

const Img = styled.div`
    width:100%;
    img{
        width:100%;
    }
`;

const Content = styled.div`
    position:relative;
    color:#fff;
    opacity:0.8;
    top:-72px;
    background-color:#4e4e4e;
    height:305px;

`;

const Title = styled.div`
font-size: 20px;
padding: 10px;
padding-bottom: 0;
    div{
        padding-bottom:10px;
    }
`;

const TitleId = styled.div`
    font-size:12px;
    padding-bottom:10px;
`;

const Info = styled.div`
   
    padding:10px;
    font-size:12px;
    opacity:0.7;
  
   
`;

const InfoItem = styled.div`
    padding: 10px 0;
    display:flex;
    border-bottom:1px solid #6d6d6d;
    :last-child{
        border-bottom:none;
    }
    label{
        flex-basis:20%;
    }
    div{
        flex-basis:80%;
        padding:0 10px;
        text-align:right;
    }
`;
export default function Tile(props){
    const titleId = `id:${props.data.id}`
    return(<div>
        <Img><img src={props.data.image}/></Img>
        <Content>
            <Title>
                <div>{props.data.name}</div>
                <TitleId>{titleId}</TitleId>
            </Title>
          <Info>
              <InfoItem>
                  <label>STATUS</label>
                  <div>{props.data.status}</div>
              </InfoItem>
              <InfoItem>
                  <label>SPECIES</label>
                  <div>{props.data.species}</div>
              </InfoItem>
              <InfoItem>
                  <label>GENDER</label>
                  <div>{props.data.gender}</div>
              </InfoItem>
              <InfoItem>
                  <label>ORIGIN</label>
                  <div>{props.data.origin.name}</div>
              </InfoItem>
              <InfoItem>
                  <label>LAST LOCATION</label>
                  <div>{props.data.location.name}</div>
              </InfoItem>
            </Info> 
           
        </Content>
       
    </div>)
}