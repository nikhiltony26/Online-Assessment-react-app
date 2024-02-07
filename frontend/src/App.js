import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Profile from './components/Profile';
import Exam from './components/Exam';
import License from './components/License';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/exam" component={Exam} />
          <Route path="/license" component={License} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
