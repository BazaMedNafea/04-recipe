import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className='"App'>
      <Navbar />
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
