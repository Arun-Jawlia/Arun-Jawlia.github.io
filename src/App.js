import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
