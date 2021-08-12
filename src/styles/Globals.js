import { createGlobalStyle } from "styled-components";
import { SIZES } from "./themeTokens";

const Global = createGlobalStyle`
    :root {
        background: #edf2ff;
        box-sizing: border-box;
        margin:0;
        padding:0;
        font-size: ${SIZES[0]}px;
         @media screen and (min-width: 500px) and (max-width:600px) {
            font-size: ${SIZES[1]}px;
         }
        @media screen and (min-width: 601px) and (max-width: 900) {
            font-size: ${SIZES[2]}px;
         }
        @media screen and (min-width:901px) and (max-width: 1300px) {
            font-size: ${SIZES[3]}px;
         }
        @media screen and (min-width:1301px) {
            font-size: ${SIZES[4]}px;
         }
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }
    body[data-theme='dark']{
        background: var(--bg-dark);
        color: var(--bg-light);
        button {
            width:40px;
            height:40px;  
            padding:5px;
            background: #d34b16;        
            box-shadow: 6px 6px 25px #212529;
            ::after {
                content: ' 🌞'
            }
        }
    }
    body[data-theme='light'] {
        background: var(--bg-light);
        color:var(--bg-dark);
        button { 
            width:40px;
            height:40px;           
            padding:5px;
            background: #0c1445;        
            box-shadow: 6px 6px 25px #868e96;
            ::after {
                content: '🌙'
            }
         }
    }
`;

export default Global;
