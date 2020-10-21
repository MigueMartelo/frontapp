import React from 'react';
import { Grid } from '@material-ui/core';
import CustomerForm from '../components/CustomerForm';

const EditCustomer = () => {
	return (
		<Grid container>
			<h2>Edit Customers</h2>
			<CustomerForm />
		</Grid>
	);
};

export default EditCustomer;
