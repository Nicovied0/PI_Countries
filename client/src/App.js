import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Nav_bar from './Components/Nav_bar/Nav_bar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/' component={Nav_bar}></Route>
          <Route exact path='/home' component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
