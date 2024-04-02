import styled from "styled-components";
import {Flex} from "antd";

export const MinTitle = styled("p")`
  font-size: 18px;
  line-height: 1rem;
  color: #00B0F0;
  text-transform: uppercase;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const Title = styled("h6")`
  text-align: center;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #000;
  font-family: "Poppins Bold"
`;
export const MinSubtitle= styled("p")`
    text-align: justify;
    font-size: 16px;
    font-weight: bold;
`;

export const MinDesc = styled("p")`
    text-align: justify;
    font-size: 16px;
`;

export const FlexWithBackgroundImage = styled(Flex)`
    background-image: url(/img/svg/tailored-solutions.png);
    background-repeat: no-repeat;
    background-size: 850px 500px;
    background-position-x: left;

    @media only screen and (max-width: 768px) {
        background-image: none
    }
`