import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import CustomerList from '../components/CustomersList';
import { getCustomersAction } from '../redux/actions';
import { Link } from 'react-router-dom';

const Customer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCustomers = () => dispatch(getCustomersAction());
		getCustomers();
		// eslint-disable-next-line
	}, []);

	const customers = useSelector(state => state.customers);

	return (
		<div>
			<Grid container justify='space-between' alignItems='center'>
				<Grid container item xs={9} justify='flex-start'>
					<h2>Customers</h2>
				</Grid>
				<Grid container item xs={3} justify='flex-end'>
					<Link to='/add-customer'>
						<Button variant='contained' color='primary' size='small'>
							+ Add Customer
						</Button>
					</Link>
				</Grid>
			</Grid>
			{customers.length ? (
				<CustomerList customers={customers} />
			) : (
				<h2>Customers not found</h2>
			)}
		</div>
	);
};

export default Customer;
