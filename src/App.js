import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//Pages + css imports
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
