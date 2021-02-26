import "./App.css";
import Donate from "./Components/Donate/Donate";
import Footer from "./Components/Footer/Footer";
import MainText from "./Components/MainText/MainText";
import Navbar from "./Components/Navbar/Navbar";
import OurServers from "./Components/OurServers/OurServers";
import Posts from "./Components/Posts/Posts";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <Route path="/" component={Home} exact></Route>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
