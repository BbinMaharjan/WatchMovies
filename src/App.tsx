import "./App.scss";

import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="app">
      <ProtectedRoutes />
    </div>
  );
}

export default App;
