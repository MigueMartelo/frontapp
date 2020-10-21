import React, { useState, useEffect } from 'react';
import {
	Button,
	FormControl,
	Grid,
	makeStyles,
	TextField,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { saveAccountAction, editAccountAction } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const AccountForm = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const addAccount = account => dispatch(saveAccountAction(account));
	const editAccount = account => dispatch(editAccountAction(account));

	let history = useHistory();

	const [cusId, setCusId] = useState('');
	const [balance, setBalance] = useState('');

	const { accountId } = useParams();

	useEffect(() => {
		const setAccount = async accountId => {
			const response = await axios.get(
				`http://localhost:9000/account/${accountId}`
			);
			const account = response.data.response;
			setCusId(account.cusId);
			setBalance(account.balance);
		};

		if (accountId) {
			setAccount(accountId).then();
		}
	}, []);

	const handleChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case 'cusId':
				setCusId(value);
				break;
			case 'balance':
				setBalance(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		const account = {
			cusId,
			balance
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
						variant='outlined'
						name='name'
						label='Customer Id'
						value={cusId}
						onChange={handleChange}
					/>
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
