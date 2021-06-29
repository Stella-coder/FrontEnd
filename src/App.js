import React from "react"
import HomeScreen from "./HeaderCom/HomeScreen";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./HeaderCom/Detail";
import ViewScreen from "./Class/ViewScreen";


const App = ()=>{
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={HomeScreen}/>
      <Route exact path = "/detail/:id" component={Detail}/>
      <Route exact path = "/class" component={ViewScreen}/>
    </Switch>
    </BrowserRouter>
  ) 
}

export default App;
