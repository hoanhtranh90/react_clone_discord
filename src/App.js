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
} from "react-router-dom"; import Channels from "./modulo/channels";
import { useSelector, useDispatch } from 'react-redux'
import { fetchInfo } from "./modulo/auth/auth.reducer";
import { useEffect } from "react";
import Register from "./modulo/auth/Register";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.authReducer.isLogin)
  const isLoading = useSelector(state => state.authReducer.isLoading)

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      dispatch(fetchInfo());
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('jwtToken')) {
      console.log("=>>abc")
      return <Auth />;
    }
  }, [localStorage.getItem('jwtToken')])

  // if(isLoading)
  // return <div>Loading</div>
  // else
  return (
    <>
      {isLogin ?
        <Router>
          <Switch>
            <Route path="/auth" component={isLogin ? Home : Auth} />
            <Route path="/channels/:id" component={Channels} />
            <Route path="/" component={Home} />
          </Switch>
        </Router> :
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Auth} />
          </Switch>
        </Router>
      }
    </>
  );
}

export default App;
