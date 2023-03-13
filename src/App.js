import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <div className="App">
          <Routes>         
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />

          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
