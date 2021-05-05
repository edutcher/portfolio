import "./App.css";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
