import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import AccountList from '../components/Account/AccountsList';
import { getAccountsAction } from '../redux/actions';
import { Link } from 'react-router-dom';

export default function Account() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getAccounts = () => dispatch(getAccountsAction());
        getAccounts();
        // eslint-disable-next-line
    }, []);

    const accounts = useSelector(state => state.accounts);

	return (
		<div>
			<Grid container justify='space-between' alignItems='center'>
				<Grid container item xs={9} justify='flex-start'>
					<h2>Accounts</h2>
				</Grid>
				<Grid container item xs={3} justify='flex-end'>
					<Link to='/add-account'>
						<Button variant='contained' color='primary' size='small'>
							+ Add Account
						</Button>
					</Link>
				</Grid>
			</Grid>
			{accounts.length ? (
				<AccountList accounts={accounts} />
			) : (
				<h2>Accounts not found</h2>
			)}
		</div>
	);
};
