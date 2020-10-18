import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
import Account from './pages/Account';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Switch>
					<Route path='/customers'>
						<Customer />
					</Route>
					<Route path='/add-customer'>
						<AddCustomer />
					</Route>
					<Route path='/accounts'>
						<Account />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
