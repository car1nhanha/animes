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
      <HeaderButton href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA_ID3442_29102021074549.pdf">
        <HeaderButtonText>Baixar</HeaderButtonText>
      </HeaderButton>
    </HeaderContainer>
  );
};
