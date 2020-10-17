import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomersAction } from '../redux/actions';

const Customer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCustomers = () => dispatch(getCustomersAction());
		getCustomers();
		// eslint-disable-next-line
	}, []);

	const customers = useSelector(state => state.customers);
	console.log(customers);

	return (
		<div>
			<h1>Customer</h1>
		</div>
	);
};

export default Customer;
