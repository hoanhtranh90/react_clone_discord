import Auth from "./modulo/auth";
import Home from "./modulo/home";
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
      </Switch>
  </Router>
  );
}

export default App;
