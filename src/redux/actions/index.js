import {
	ADD_CUSTOMER,
	GET_CUSTOMERS,
	EDIT_CUSTOMER,
	DELETE_CUSTOMER,
} from '../types';

import axios from 'axios';

const APIUrl = 'http://localhost:9000/customer';

export const addCustomer = customer => ({
	type: ADD_CUSTOMER,
	payload: customer,
});

export const getCustomers = customers => ({
	type: GET_CUSTOMERS,
	payload: customers,
});

export const editCustomer = customer => ({
	type: EDIT_CUSTOMER,
	payload: customer,
});

export const deleteCustomer = customerId => ({
	type: DELETE_CUSTOMER,
	payload: customerId,
});

export const getCustomersAction = () => async dispatch => {
	try {
		const customers = await axios.get(APIUrl);
		dispatch(getCustomers(customers.data.response));
	} catch (error) {
		console.error(error);
	}
};

export const saveCurstomerAction = customer => async dispatch => {
	try {
		await axios.post(APIUrl, customer);
		dispatch(addCustomer(customer));
	} catch (error) {
		console.error(error);
	}
};
