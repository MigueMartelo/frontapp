import React from 'react';
import { Grid } from '@material-ui/core';
import CustomerForm from '../components/CustomerForm';

const AddCustomer = () => {
	return (
		<Grid container>
			<h2>Add Customer</h2>
			<CustomerForm />
		</Grid>
	);
};

export default AddCustomer;
