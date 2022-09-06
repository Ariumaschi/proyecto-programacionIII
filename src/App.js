import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favoritos from "./screens/Favoritos/Favoritos";
import TodasPeliculas from "./components/Todas/TodasPeliculas"
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/Favoritos' component={Favoritos} />
          <Route path='/Todas' component={TodasPeliculas} />
          <Route path='' component={ NotFound } />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;


