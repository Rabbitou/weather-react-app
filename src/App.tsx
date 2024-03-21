import "./App.css";
import { getWeatherByName } from "../fetchers/getWeatherByName";

function App() {
  const res = getWeatherByName().then((data) => console.log(data));
  // console.log(res);

  return (
    <div>
      <h1 className="text-3xl">Hello</h1>
    </div>
  );
}

export default App;
