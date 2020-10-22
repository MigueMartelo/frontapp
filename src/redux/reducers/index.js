import {
	ADD_CUSTOMER, GET_CUSTOMERS, EDIT_CUSTOMER, DELETE_CUSTOMER,
	ADD_ACCOUNT, GET_ACCOUNTS, EDIT_ACCOUNT, DELETE_ACCOUNT,
} from '../types';

import customerReducers from './customer';
import accountReducers from './account';

const initialState = {
	customers: [],
	accounts: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CUSTOMERS:
		case ADD_CUSTOMER:
		case EDIT_CUSTOMER:
		case DELETE_CUSTOMER:
			return customerReducers(state, action);
		case GET_ACCOUNTS:
		case ADD_ACCOUNT:
		case EDIT_ACCOUNT:
		case DELETE_ACCOUNT:
			return accountReducers(state, action);
		default:
			return state;
	}
}
