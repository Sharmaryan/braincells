import "./App.css";
import data from "./CardFlip.json";

function App() {
  const images = data["Card-Flip"][0].imageSet;
  console.log(images);


  // console.log(images[0],'from')
  return (
    <>
      {/* <img src={ab} /> */}
      {[
        "./assets/farm_animals/cow.png",
        "./assets/farm_animals/rabbit.png",
        "./assets/farm_animals/dog.png",
        "./assets/farm_animals/cat.png",
        "./assets/farm_animals/camel.png",
        "./assets/farm_animals/sheep.png",
      ].map((item) => {
        console.log(item);
        return <img src={item} alt="helo" />;
      })}
      {/* <img src={ab} alt="" /> */}
    </>
  );
}

export default App;
