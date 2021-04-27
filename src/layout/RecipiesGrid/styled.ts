import styled from "styled-components";

export const RecipiesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 16px;
  padding: 0 8px;

  @media screen and (min-width: 576px) {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  }
`;