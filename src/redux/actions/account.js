import {
	GET_ACCOUNTS,
	ADD_ACCOUNT,
	EDIT_ACCOUNT,
	DELETE_ACCOUNT,
} from '../types';

import axios from 'axios';

const APIUrl = 'http://localhost:9000/account';

export const addAccount = customer => ({
	type: ADD_ACCOUNT,
	payload: customer,
});

export const getAccounts = customers => ({
	type: GET_ACCOUNTS,
	payload: customers,
});

export const editAccount = customer => ({
	type: EDIT_ACCOUNT,
	payload: customer,
});

export const deleteAccount = number => ({
	type: DELETE_ACCOUNT,
	payload: number,
});

export const getAccountsAction = () => async dispatch => {
	try {
		const customers = await axios.get(APIUrl);
		dispatch(getAccounts(customers.data.response));
	} catch (error) {
		console.error(error);
	}
};

export const saveAccountAction = customer => async dispatch => {
	try {
		const { data } = await axios.post(APIUrl, customer);
		if(data.status) {
			dispatch(addAccount(data.response));
		}
	} catch (error) {
		console.error(error);
	}
};

export const deleteAccountAction = id => async dispatch => {
	try {
		await axios.delete(`${APIUrl}/${id}`);
		dispatch(deleteAccount(id));
	} catch (error) {
		console.error(error);
	}
};

export const editAccountAction = customer => async dispatch => {
	try {
		await axios.put(`${APIUrl}`, customer);
		dispatch(editAccount(customer));
	} catch (error) {
		console.error(error);
	}
};
