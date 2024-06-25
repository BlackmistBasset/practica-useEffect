import { useEffect } from "react";
import { animals } from "../../../data";

export const Filter = ({
  filter,
  setFilter,
  animalsArray,
  setAnimalsArray,
}) => {
  useEffect(() => {
    if (filter === "all") {
      setAnimalsArray(animals);
    } else {
      const animalsFiltered = animals.filter((animal) => {
        console.log(animal.variant, filter);
        return animal.variant === filter;
      });
      setAnimalsArray(animalsFiltered);
      console.log(filter);
    }
  }, [filter]);

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  //   const handleChangeFilter = (e) => {
  //     e.preventDefault();

  //     if (e.target.select.value === "all") {
  //       setAnimalsArray(animals);
  //     } else {
  //       const animalsFiltered = animals.filter((animal) => {
  //         console.log(animal.variant, e.target.select.value);
  //         return animal.variant === e.target.select.value;
  //       });
  //       setAnimalsArray(animalsFiltered);
  //     }
  //   };

  return (
    <form className="mt-5 w-[600px] flex  justify-between">
      <select
        aria-placeholder="Filtrar por..."
        className="border-2 border-slate-800 border-solid w-[500px]"
        name="select"
        onChange={handleChangeFilter}
      >
        <option value="all">Todos</option>
        <option value="cat">Gatitos</option>
        <option value="dog">Perritos</option>
      </select>
      {/* <button
        type="submit"
        className="bg-[#006699] text-white px-[8px] py-[6px] rounded-lg"
      >
        Filtrar
      </button> */}
    </form>
  );
};
