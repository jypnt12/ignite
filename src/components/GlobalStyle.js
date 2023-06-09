import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
        background: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #1f1f1f;
        color: white;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: white;

        @media only screen and (max-width: 768px) {
            font-size: 2rem;
       
     }
    }
    h3{
        font-size: 1.3rem;
        color: white;
        padding: 1.5rem 0rem;
        @media only screen and (max-width: 768px) {
            font-size: 1rem;
     }
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #dfdfdf;
        @media only screen and (max-width: 768px) {
        font-size: .8rem;
        }
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
`

export default GlobalStyles