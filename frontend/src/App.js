import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="conatiner container-fluid">
          <Home path="/" component={Home} exact />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
