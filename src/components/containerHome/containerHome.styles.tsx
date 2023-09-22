import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  color: #ebe7e7;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.8px;
  margin: 30px 0;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;
