import "./App.css";
import HttpsRedirect from "react-https-redirect";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <HttpsRedirect>
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
            <Navbar />
            <Route path="/" component={Home} exact></Route>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </HttpsRedirect>
  );
}

export default App;
