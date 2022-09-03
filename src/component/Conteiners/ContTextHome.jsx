import styled from "styled-components";

const ContTextHome = styled.div  `
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    width: 40%;
    height: 100vh; 


    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 50px;
        width: 100%;
        height: 60vh;
        padding-left: 0px;

    }

`
export default ContTextHome