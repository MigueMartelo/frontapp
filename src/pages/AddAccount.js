import React from 'react';
import { Grid } from '@material-ui/core';
import AccountForm from '../components/Account/AccountForm';

const AddAccount = () => {
	return (
		<Grid container>
			<h2>Add Accounts</h2>
			<AccountForm />
		</Grid>
	);
};

export default AddAccount;
