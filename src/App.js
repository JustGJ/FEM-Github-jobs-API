import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Job from './pages/Job';


function App() {
	
  return (
    <Router>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/:jobID" component={Job} />
		</Switch>
    </Router>
  );
}

export default App;
