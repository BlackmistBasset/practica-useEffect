import { useState } from "react";
import { MainContainer } from "./components/layout/mainContainer/MainContainer";
import { Card } from "./components/card/Card";
import { Filter } from "./components/filter/Filter";

import { animals } from "../data";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [animalsArray, setAnimalsArray] = useState(animals);

  return (
    <>
      <MainContainer>
        <Filter
          filter={filter}
          setFilter={setFilter}
          animalsArray={animalsArray}
          setAnimalsArray={setAnimalsArray}
        />
        <div className="cards__container">
          {animalsArray.map(({ name, img, variant }) => (
            <Card name={name} img={img} petType={variant} key={name} />
          ))}
        </div>
      </MainContainer>
    </>
  );
};

export default App;
