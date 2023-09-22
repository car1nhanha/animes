import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const HeaderImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  text-align: center;
`;

export const HeaderSubtitle = styled.h2`
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
`;

export const HeaderButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  width: 120px;
  padding: 14px 19.409px 14px 20.861px;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  border-radius: 5px;
  background: linear-gradient(90deg, #ff657f 0%, #f9d423 100%);
`;

export const HeaderButtonText = styled.span`
  color: #ebe7e7;
  text-align: center;
  font-family: Roboto;
  font-size: 13.3px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
