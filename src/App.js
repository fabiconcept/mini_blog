import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './pages/blog';
import Homepage from './pages/homepage';
import Footer from './ui-components/footer';
import NavBar from './ui-components/navBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route path='/blog/:id'>
            <Blog/>
          </Route>
          <Route path='/blog'>
            <Blog/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;