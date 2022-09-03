import styled from "styled-components";

const SubmitButton = styled.button  ` 
    border-width: 2px;
    border-style: solid;
    border-color: black;
    color: black;
    border-radius: 5px;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    height: 30px;
    width: 100px;
    margin-top: 25px ;
    font-size: 15px;
    box-shadow: 4px 4px 0px 2px rgba(0,0,0,1);

    :hover{
        background-color: #888787;
        color: white;
    }

`
export default SubmitButton