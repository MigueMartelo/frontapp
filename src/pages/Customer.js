import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomerList from '../components/CustomersList';
import { getCustomersAction } from '../redux/actions';

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
			<h1>Customer</h1>
			{customers.length ? (
				<CustomerList customers={customers} />
			) : (
				<h2>Customers not found</h2>
			)}
		</div>
	);
};

export default Customer;
