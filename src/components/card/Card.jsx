export const Card = ({ kittenName, kittenImg, isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="w-[200px] p-4 border-2 rounded-xl">
        <img
          src={kittenImg}
          alt="Imagen de gatito"
          className="w-full aspect-square object-cover"
        />
        <h2 className="mt-3">{kittenName}</h2>
      </div>
    );
  } else {
    return (
      <div className="w-[200px] p-4 border-2 rounded-xl">
        <h2 className="text-center">
          Debes estar logueado para poder ver estos hermosos gatitos.
        </h2>
        <button className="p-1 border-2 rounded-md mt-3 m-auto block">
          Iniciar sesión
        </button>
      </div>
    );
  }
};
