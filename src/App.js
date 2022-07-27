// import logo from './logo.svg';
import './App.css';

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Realated from "./components/Realated";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Carousel />
      <ProductList />
      <Realated />
      <Footer />
    </div>
  );
}

export default App;
