import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 290px;
  flex-shrink: 0;

  @media (max-width: 1000px) {
    width: 150px;
    height: 217px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 145px;
  }
`;

export const Image = styled.img`
  border-radius: 3px;
  width: 200px;
  height: 290px;
  object-fit: cover;

  @media (max-width: 1000px) {
    width: 150px;
    height: 217px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 145px;
  }
`;
