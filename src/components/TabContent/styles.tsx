import styled from "styled-components";

export const Heading = styled("p")`
    font-weight: bolder;
    font-size: large;
`;
export const SubHeading = styled("p")`
    font-size: smaller;
`;
export const ButtonText = styled("p")`
    padding: 0;
    font-size: smaller;
    font-weight: bolder;
    color: white;
`;

export const PriceText= styled("p")`
    font-size: medium;
    font-weight: bolder;
`;

export const TableTitle = styled("h6")`
    font-size: x-large;
`

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
