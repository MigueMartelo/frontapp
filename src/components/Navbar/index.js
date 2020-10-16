import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar className='nav'>
				<Link to='/'>
					<Typography variant='h4'>FrontApp</Typography>
				</Link>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/customers'>Customers</Link>
					</li>
					<li>
						<Link to='/accounts'>Accounts</Link>
					</li>
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
