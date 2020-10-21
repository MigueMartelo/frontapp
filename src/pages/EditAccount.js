import React from 'react';
import { Grid } from '@material-ui/core';
import AccountForm from '../components/Account/AccountForm';

const EditAccount = () => {
	return (
		<Grid container>
			<h2>Edit Accounts</h2>
			<AccountForm />
		</Grid>
	);
};

export default EditAccount;
