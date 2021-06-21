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
import { useSelector, useDispatch } from 'react-redux'
import { fetchInfo } from "./modulo/auth/auth.reducer";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector( state => state.authReducer.isLogin)
  const isLoading = useSelector( state => state.authReducer.isLoading)
  console.log("=>>>>>>>>>>>",isLogin)

  useEffect(()=>{
    if(localStorage.getItem('jwtToken')){
      dispatch(fetchInfo());
    }
    else return <Auth />;
  },[])

  // if(isLoading)
  // return <div>Loading</div>
  // else
  return (
    <Router>
      <Switch>
        {/* <Route path="/auth" component={Auth} /> */}
        <Route path="/channels/:id" component={Channels}/>
        <Route path="/" component={isLogin ? Home : Auth} />
      </Switch>
  </Router>
  );
}

export default App;
