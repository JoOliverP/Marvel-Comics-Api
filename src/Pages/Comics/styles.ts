import styled from 'styled-components';

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    }
}
export const Container = styled.main`
  width: 100%;
  height: 100%;  
  display: flex;
  background: #979797;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`
export const Title = styled.h1`
  font-size: 50px;
  margin-top: 32px;  
`
export const Search = styled.input`
    margin-top: 32px;
    margin-bottom: 32px;
    width: 20.5rem;
    height: 2rem;
    font-size:25px;
`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;  
  justify-content: center;
`
const urlImg = (props: ThumbnailData) =>
    `${props.thumbnail.path}.${props.thumbnail.extension}`



export const Card = styled.div`
    background: #f1f1f1;
    width: 500px;
    height: auto;
    border: 1px solid #000;
    margin: 10px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
     div#img{
       width: 100%;
       height: 300px; 
       background: url(${urlImg}) no-repeat center;
       background-size: cover;
   }
   h1,p{
       text-align: center;
       padding: 5px;
   }
   p{
       font-size: 16px;
   }
`
export const BtnMore = styled.div`
    display: flex;
    background: #db3434;
    width: 30%;
    height: 3rem;
    justify-content: center;
    align-items:center;
    margin: 30px 0 30px 0;
    cursor: pointer;
    transition: 0.5s;
    span{
        font-size: 20px;
    }
    &:hover{
        color: #f1f1f1;
        transform: scale(1.3);
    }
`