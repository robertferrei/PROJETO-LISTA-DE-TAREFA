import { FcEmptyTrash } from 'react-icons/fc'
import styled from 'styled-components'


export const Container = styled.div`
    background:linear-gradient(90deg,#383838 0%, #000000 81.25%);
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    min-height:100vh;

    @media (max-width: 1024px) {
    width: 100%;
    
     
    
   
  }
 `

export const Todolist = styled.div`
    background: white;
    padding:30px 20px ;
    border-radius:10px ;

    ul{
      padding: 0;
      margin-top:60px;
    }

    @media (max-width: 1024px) {
    width: 60%;
    height: auto;
     
    
    
  }
 
 `
export const Inputt = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
      border-radius:10px ;
      height: 30px;
      margin-right:20px;
      width: 340px;

      @media (max-width: 1024px) {
    width: 100%;
    
  }
 `
export const Buttonn = styled.button`
      width: 130px;
      height: 40px;
      left: 390px;
      top: 30px;

      background: #8052EC;
      border-radius: 5px;
      color:white;
      font-size:15px;
      cursor:pointer;
      border: none;
       &:hover{
        opacity:0.8;
       }
       &:active{
        opacity: 0.6;
       }

       @media (max-width: 1024px) {
  margin-top:25px
 `
export const ListItem = styled.div`
    width: 500px;
    height: 60px;
    left: 20px;
    top: 310px;
    cursor: pointer;
    background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    list-style:none;
    display: flex;
    align-items:center;
    justify-content:space-around;
    margin-bottom:30px ;

    @media (max-width: 1024px) {
  width: 100%;
    height: 50%;
  }
  
 `
export const HH3 = styled.h3`

      border: solid 1px ;
      border-radius: 10px;
      text-align:center;
      background-color: #8052EC ;
      color: white;


      
 `
