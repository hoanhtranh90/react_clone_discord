import Auth from "./modulo/auth";
import Home from "./modulo/home";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";import Channels from "./modulo/channels";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/channels/:id" component={Channels}/>
        <Route path="/" component={Home} />
      </Switch>
  </Router>
  );
}

export default App;
