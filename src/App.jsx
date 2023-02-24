import "./App.css";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

function App() {
  return <div className="App">
    <h1 className="text-center text-white py-3 fw-bold m-0">FAKE STORE</h1>

    <ProductsList />

    <Footer />

  </div>;
}

export default App;
