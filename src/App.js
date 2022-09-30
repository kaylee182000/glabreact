import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
