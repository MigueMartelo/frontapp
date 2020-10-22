import React, { useState, useEffect } from 'react';
import {
	Button,
	FormControl,
	Grid,
	makeStyles,
	TextField,
	MenuItem
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { saveAccountAction, editAccountAction, getCustomersAction } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const AccountForm = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const customers = useSelector(state => state.customers);
	const types = [ 'CHECKING', 'SAVINGS'];
	const statuses = [ 'ACTIVE', 'CLOSED'];

	const addAccount = account => dispatch(saveAccountAction(account));
	const editAccount = account => dispatch(editAccountAction(account));

	const [customerId, setCustomerId] = useState('');
	const [balance, setBalance] = useState('');
	const [type, setType] = useState(types[0]);
	const [status, setStatus] = useState(statuses[0]);

	const { accountId } = useParams();


	useEffect(() => {
		const getCustomers = () => dispatch(getCustomersAction());
		getCustomers();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		console.log('setAccount');
		const setAccount = async accountId => {
			const response = await axios.get(
				`http://localhost:9000/account/${accountId}`
			);
			const account = response.data.response;
			setCustomerId(account.customerId);
			setBalance(account.balance);
			setType(account.type);
			setStatus(account.status);
		};

		if (accountId) {
			setAccount(accountId).then();
		}
	}, [accountId]);

	const handleChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case 'customerId':
				setCustomerId(value);
				break;
			case 'balance':
				setBalance(value);
				break;
			case 'type':
				setType(value);
				break;
			case 'status':
				setStatus(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		const account = {
			customerId,
			balance,
			type,
			status,
		};

		if (accountId) {
			account.id = Number(accountId);
			editAccount(account);
		} else {
			addAccount(account);
		}

		history.push('/accounts');
	};

	return (
		<Grid container item xs={12} justify='center'>
			<form className={classes.root} onSubmit={handleSubmit}>
				<FormControl fullWidth>
					<TextField
						select
						variant='outlined'
						label="Customer"
						name="customerId"
						value={customerId}
						onChange={handleChange}
						required
					>
						<MenuItem key={0} value={null}>&nbsp;</MenuItem>
						{customers.map((customer) => (
							<MenuItem key={customer.id} value={customer.id}>
								{customer.name}
							</MenuItem>
						))}
					</TextField>
				</FormControl>
				<FormControl fullWidth>
					<TextField
						select
						variant='outlined'
						label="Type"
						name="type"
						value={type}
						onChange={handleChange}
						required
					>
						<MenuItem key={0} value={null}>&nbsp;</MenuItem>
						{types.map((type) => (
							<MenuItem key={ type } value={ type }>{ type }</MenuItem>
						))}
					</TextField>
				</FormControl>
				<FormControl fullWidth>
					<TextField
						select
						variant='outlined'
						label="Status"
						name="status"
						value={status}
						onChange={handleChange}
						required
					>
						<MenuItem key={0} value={null}>&nbsp;</MenuItem>
						{statuses.map((status) => (
							<MenuItem key={ status } value={ status }>{ status }</MenuItem>
						))}
					</TextField>
				</FormControl>
				<FormControl fullWidth>
					<TextField
						variant='outlined'
						name='balance'
						label='Balance'
						value={balance}
						onChange={handleChange}
					/>
				</FormControl>
				<Button type='submit' color='primary' variant='contained' size='large'>
					Save
				</Button>
			</form>
		</Grid>
	);
};

export default AccountForm;
