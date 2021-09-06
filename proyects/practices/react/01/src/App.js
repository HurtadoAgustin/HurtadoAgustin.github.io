import Form from "./Form";

const movies = [
  {
    name: "Avenger",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  }
];

export default function App() {
  return (
    <div>
      <h2>Movies</h2>
      {movies.map(movie => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
