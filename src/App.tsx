import { one, two } from "./components/animes";
import { AnimesCard } from "./components/animesCard";
import { HomeContainer } from "./components/containerHome";
import { Header } from "./components/header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <HomeContainer title="Lançamentos">
        {one.map((anime, i) => (
          <AnimesCard src={anime} key={i} />
        ))}
      </HomeContainer>
      <br />
      <br />
      <br />
      <HomeContainer title="Populares">
        {two.map((anime, i) => (
          <AnimesCard src={anime} key={i} />
        ))}
      </HomeContainer>
    </>
  );
}

export default App;
