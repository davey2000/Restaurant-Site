import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Awards from "./pages/Awards";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="home" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/awards">
        <Awards />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default App;
