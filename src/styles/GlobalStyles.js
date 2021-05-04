/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR } from './DarkMode';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
           
    }
    
    *, *::before, *::after {
            box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
            margin: 0;
    }
    ul {
            list-style: none;
    }
    button {
            background: transparent;
            border: 0;
            outline: 0;
    }
    body {
            background: ${BASE_COLOR};

            overflow-x: hidden;
            color: white;
            height: 100vh;
            margin: 0 auto;
            width: 100%;
    }
    
    /* width */
        ::-webkit-scrollbar {
          width: 15px;
          height: 10px;
        }

      /* Handle on hover */
      ::-webkit-scrollbar:hover {
          background: ${SECONDARY_COLOR};
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${HIGH_COLOR};
        }
    
    @media (min-width: 1000px) {
            /* width */
            ::-webkit-scrollbar{
              background-color: ${BASE_COLOR};
          }
          ::-webkit-scrollbar-track{
              background-color: ${SECONDARY_COLOR};
          }
          ::-webkit-scrollbar-thumb{
              background-color: ${HIGH_COLOR};
          }
    }

    #app {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
    }

`;

export default GlobalStyle;
