import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import { Details } from './Components/Details/Details';
// import Nav_bar from './Components/Nav_bar/Nav_bar';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate'
import NotFound from './Components/NotFound/NotFound';
import Activities from './Components/Activities/Activities';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          {/* <Route path='*' element={<Nav_bar/>}></Route> */}
          <Route exact path='/home' component={Home}></Route>
          <Route exact path ='/activities' component = {Activities}/> 
          <Route exact path ='/activity' component ={ActivityCreate}/>
          <Route exact path='/home/:id' component={Details}></Route>
          <Route path='/' component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
