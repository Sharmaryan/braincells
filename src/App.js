import "./App.css";
import data from "./CardFlip.json";

function App() {
  const images = data["Card-Flip"][0].imageSet;

  return (
    <>
      {images.map((item) => {
        return <img key={item.id} src={item.image} alt="helo" />;
      })}
    </>
  );
}

export default App;
