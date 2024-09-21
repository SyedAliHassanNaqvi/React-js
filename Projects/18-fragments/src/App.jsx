import CarModels from "./components/carModels";
import Title from "./components/title";
function App() {
  let carModels = ["Supra MK5", "Audi", "Mercedes-AMG", "Corolla"];
  return (
    <>
      <Title items={carModels} />
      <CarModels items={carModels} />
    </>
  );
}
export default App;
