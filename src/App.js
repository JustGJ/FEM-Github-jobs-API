import React, { useState } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Job from './pages/Job';


const App = () => {

const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'light' ? true : false);

  return (
    <BrowserRouter basename="/FEM-Github-jobs-API" >
		<Header darkMode={darkMode} setDarkMode={setDarkMode}/>
		<Switch>
			<Route exact path="/">
				<Home darkMode={darkMode} setDarkMode={setDarkMode} />
			</Route>
			<Route path="/job/:id" component={Job} />
		</Switch>
    </BrowserRouter>
  );
}

export default App;
