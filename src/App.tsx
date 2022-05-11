import "./App.scss";
import Home from "./components/pages/Home/Home";

import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
