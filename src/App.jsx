//tipo de exportación 1: Exportación por default

import { MainContainer } from "./components/layout/mainContainer/MainContainer";
import { Card } from "./components/card/Card";
import { Navbar } from "./components/navbar/Navbar";
import michi1 from "./assets/michis1.jpg";
import michi2 from "./assets/michis2.jpg";
import michi3 from "./assets/michis3.jpg";

const App = () => {
  const isLogged = true;
  return (
    <>
      <MainContainer>
        <Navbar isLoggedIn={isLogged} userName="Pepe" />

        <div className="cards__container">
          <Card kittenName="Raulita" kittenImg={michi1} isLoggedIn={isLogged} />
          <Card
            kittenName="Varios michis"
            kittenImg={michi2}
            isLoggedIn={isLogged}
          />
          <Card kittenName="Kiko" kittenImg={michi3} isLoggedIn={isLogged} />
        </div>
      </MainContainer>
    </>
  );
};

export default App;
