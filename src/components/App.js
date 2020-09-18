import React from 'react';
import Home from './Home';
import AllTeams from './AllTeams'
import TeamUpdateOrDelete from './TeamUpdateOrDelete'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/teams'} component={AllTeams} />
          <Route exact path={'/teams/:id'} component={TeamUpdateOrDelete} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
