import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//HomePage import
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

const HatsPage = (props) => {
  console.log(props);
  return (
  <div>
    <h1>Hats Page</h1>
  </div>
)};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
