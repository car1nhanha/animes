import { Container, Image } from "./animesCard.styles";

interface IAnimesCard {
  src: string;
}

export const AnimesCard = ({ src }: IAnimesCard) => {
  return (
    <Container>
      <Image src={src} />
    </Container>
  );
};
