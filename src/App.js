import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Konversi } from "./pages/Konversi";
import { Counter } from "./pages/Counter";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import "./App.css";

//==================================PADA HALAMAN INI MENGGUNAKAN==============================
//====================================== ROUTE-ROUTER-DOM=====================================
//====================================== LIFECYCLE METHOD=====================================
//====================================== CONTEXT==============================================

const TContext = React.createContext();
const TConsumer = TContext.Consumer;

class TProvider extends React.Component {
  toggleTheme = evt => {
    this.setState({ theme: evt.target.checked ? "night" : "day" });
  };

  state = {
    theme: "night",
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <TContext.Provider value={this.state}>
        {this.props.children}
      </TContext.Provider>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <label className="switch">
        <TConsumer>
          {({ toggleTheme, theme }) => (
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "night"}
            />
          )}
        </TConsumer>
        <span className="slider round" />
      </label>
    );
  }
}

export const Footer = () => (
  <footer>
    <label>night theme:</label> <Slider />
  </footer>
);

class App extends Component {
  // LIFECYCLE METHOD
  componentDidMount() {
    setTimeout(() => {
      alert("Selamat Datang di SerbagunApps");
    }, 2000);
  }

  render() {
    return (
      <TProvider>
        <TConsumer>
          {({ theme }) => (
            <React.Fragment>
              <Router>
                <NavigationBar />
                <Jumbotron />
                <div className={theme}>
                  <Layout>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/konversi" component={Konversi} />
                      <Route path="/counter" component={Counter} />
                      <Route component={NoMatch} />
                    </Switch>
                  </Layout>
                </div>
              </Router>
            </React.Fragment>
          )}
        </TConsumer>
      </TProvider>
    );
  }
}

export default App;
