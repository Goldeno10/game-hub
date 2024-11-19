import useGenre from "@/hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();

  return (
    <>
      <h2>Genres</h2>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
