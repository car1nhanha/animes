import { BodyContainer, ContainerCard, Title } from "./containerHome.styles";

interface IHomeContainer {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}

export const HomeContainer = ({ children, title }: IHomeContainer) => {
  return (
    <BodyContainer>
      <Title>{title}</Title>
      <ContainerCard>{children}</ContainerCard>
    </BodyContainer>
  );
};
