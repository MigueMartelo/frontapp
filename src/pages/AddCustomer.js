import React from 'react';
import {
	Button,
	FormControl,
	Grid,
	makeStyles,
	TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const AddCustomer = () => {
	const classes = useStyles();

	return (
		<Grid container xs={12}>
			<h2>Add Customer</h2>
			<Grid container item xs={12} justify='center'>
				<form className={classes.root}>
					<FormControl fullWidth>
						<TextField variant='outlined' name='name' label='Full Name' />
					</FormControl>
					<FormControl fullWidth>
						<TextField variant='outlined' name='address1' label='Address 1' />
					</FormControl>
					<FormControl fullWidth>
						<TextField variant='outlined' name='address2' label='Address 2' />
					</FormControl>
					<Grid container item justify='space-between'>
						<TextField variant='outlined' name='city' label='City' />
						<TextField variant='outlined' name='state' label='State' />
						<TextField
							variant='outlined'
							name='postalCode'
							label='Postal Code'
						/>
						<TextField variant='outlined' name='Country' label='Country' />
					</Grid>
					<Grid container item justify='space-between'>
						<TextField
							variant='outlined'
							name='personalPhone'
							label='Personal Phone'
						/>
						<TextField variant='outlined' name='workPhone' label='Work Phone' />
						<TextField
							variant='outlined'
							name='personalEmail'
							label='Personal Email'
						/>
						<TextField variant='outlined' name='workEmail' label='Work Email' />
					</Grid>
					<Button
						type='submit'
						color='primary'
						variant='contained'
						size='large'
					>
						Save
					</Button>
				</form>
			</Grid>
		</Grid>
	);
};

export default AddCustomer;
