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
import MainBox1 from './components/MainBox1';
import MainBox2 from './components/MainBox2';
import MainBox3 from './components/MainBox3';
import MainBox4 from './components/MainBox4';
import MainBox5 from './components/MainBox5';
import MainBox6 from './components/MainBox6';
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
        <Route path="/booh" component={MainBox1} />
        <Route path="/stillhere" component={MainBox2} />
        <Route path="/doyoulike" component={MainBox3} />
        <Route path="/heresjohnny" component={MainBox4} />
        <Route path="/itsalive" component={MainBox5} />
        <Route path="/hereyougo" component={MainBox6} />
      </Switch>
    </div>
  );
}

export default App;
