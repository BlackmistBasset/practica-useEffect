import { MainContainer } from "./components/layout/mainContainer/MainContainer";
import { Card } from "./components/card/Card";

import { animals } from "../data";

const App = () => {
  return (
    <>
      <MainContainer>
        <div className="cards__container">
          {animals.map(({ name, img, variant }) => (
            <Card name={name} img={img} petType={variant} key={name} />
          ))}
        </div>
      </MainContainer>
    </>
  );
};

export default App;
