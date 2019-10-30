import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BoxPage from './components/BoxPage';
import ApiPage from './components/ApiPage';
import Haha1 from './components/Haha1';
import Haha2 from './components/Haha2';
import Haha3 from './components/Haha3';
import Haha4 from './components/Haha4';
import Haha5 from './components/Haha5';
import Haha6 from './components/Haha6';
import MovieDisplay from './components/MovieDisplay'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pick" component={BoxPage} />
        <Route path="/movie" component={ApiPage} />
        <Route path="/oops" component={Haha1} />
        <Route path="/mybad" component={Haha2} />
        <Route path="/areyoulost" component={Haha3} />
        <Route path="/yesyouare" component={Haha4} />
        <Route path="/behindyou" component={Haha5} />
        <Route path="/hereyougo" component={Haha6} /> 
      </Switch>
    </div>
  );
}

export default App;
