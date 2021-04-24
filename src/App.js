import "./App.css";
import { apiLink, apiKey } from "./api/apiData";

function App() {
  async function testApi() {
    let query = "amelia";
    const result = await fetch(`${apiLink}?apikey=${apiKey}&s=${query}`);
    const data = await result.json();
    console.log(data);
  }
  testApi();
  return (
    <div className="App">
      <header>
        <h1>DARK MOVIE APP</h1>
      </header>
    </div>
  );
}

export default App;
