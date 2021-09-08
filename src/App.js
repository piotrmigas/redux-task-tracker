import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header title="Task Tracker" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
