import { createGlobalStyle } from "styled-components";
import { device } from "utils/data";


export default createGlobalStyle`
  body {
    text-align: center;
  }

  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
    padding: 25px;
    margin-top: 50px;
  }

  h4 {
    font-size: 2rem;
    margin: 50px 0;
  }

  h5 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.7rem;
  }


  @media ${device.laptop} {

    h1 {
      font-size: 10rem;
    }

    h2 {
      font-size: 4rem;
    }
    
    h3 {
      font-size: 5.5rem;
    }

    h4 {
      font-size: 2.5rem;
      margin: 100px 0 50px 0;
    }

    h5 {
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;
