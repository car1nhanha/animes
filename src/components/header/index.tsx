import {
  HeaderButton,
  HeaderButtonText,
  HeaderContainer,
  HeaderImage,
  HeaderSubtitle,
  HeaderTitle,
} from "./headr.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage src="/icon.png" />
      <HeaderTitle>Assista aos melhores animes</HeaderTitle>
      <HeaderSubtitle>Faça o download agora mesmo</HeaderSubtitle>
      <HeaderButton onClick={() => alert("colocar o link do .exe aqui")}>
        <HeaderButtonText>Baixar</HeaderButtonText>
      </HeaderButton>
    </HeaderContainer>
  );
};
