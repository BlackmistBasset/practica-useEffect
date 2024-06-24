export const Card = ({ name, img, petType }) => {
  return (
    <div className="w-[200px] p-4 border-2 rounded-xl">
      <img
        src={img}
        alt="Imagen de gatito"
        className="w-full aspect-square object-cover"
      />
      <h2 className="mt-3">{name}</h2>
      <p className="mt-2">{petType}</p>
    </div>
  );
};
