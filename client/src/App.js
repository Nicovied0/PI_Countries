import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate'
import NotFound from './Components/NotFound/NotFound';
import Activities from './Components/Activities/Activities';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/activitiesList' component={Activities} />
          <Route exact path='/activities' component={ActivityCreate} />
          <Route exact path='/home/:id' component={Details} />
          <Route path='/' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
