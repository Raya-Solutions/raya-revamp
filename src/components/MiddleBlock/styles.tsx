import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2rem 2rem 5rem 0;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  text-align: justify;
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 800px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
