import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@material-ui/core';
import { deleteAccountAction } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& button.MuiButtonBase-root': {
			marginLeft: theme.spacing(1),
		},
	},
}));

const AccountList = ({ accounts }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const deleteAccount = accountId =>
		dispatch(deleteAccountAction(accountId));

	const deleteHandler = accountId => {
		deleteAccount(accountId);
	};

	return (
		<TableContainer component={Paper} className={classes.root}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Customer Id</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Balance</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{accounts.map(account => (
						<TableRow key={account.number}>
							<TableCell>{account.number}</TableCell>
							<TableCell>{account.customerId}</TableCell>
							<TableCell>{account.type}</TableCell>
							<TableCell>{account.status}</TableCell>
							<TableCell>{account.balance}</TableCell>
							<TableCell>
								<Link to={`/edit-account/${account.number}`}>
									<Button variant='contained' color='default' size='small'>
										Edit
									</Button>
								</Link>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									onClick={() => deleteHandler(account.number)}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AccountList;
