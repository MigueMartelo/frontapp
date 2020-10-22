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

const AccountList = ({ accounts }) => {
	const dispatch = useDispatch();

	const deleteAccount = accountId =>
		dispatch(deleteAccountAction(accountId));

	const deleteHandler = accountId => {
		deleteAccount(accountId);
	};

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Customer Id</TableCell>
						<TableCell>Balance</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{accounts.map(account => (
						<TableRow key={account.custId}>
							<TableCell>{account.balance}</TableCell>
							<TableCell>
								<Link to={`/edit-account/${account.id}`}>
									<Button variant='contained' color='default' size='small'>
										Edit
									</Button>
								</Link>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									onClick={() => deleteHandler(account.id)}
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
