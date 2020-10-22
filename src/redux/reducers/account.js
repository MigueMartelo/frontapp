import {
	GET_ACCOUNTS,
	ADD_ACCOUNT,
	EDIT_ACCOUNT,
	DELETE_ACCOUNT,
} from '../types';

export default function (state, action) {
	switch (action.type) {
		case GET_ACCOUNTS:
			return {
				...state,
				accounts: action.payload,
			};
		case ADD_ACCOUNT:
			return {
				...state,
				accounts: [...state.accounts, action.payload],
			};
		case EDIT_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.map(account =>
					account.number === action.payload.number
						? action.number : account
				),
			};
		case DELETE_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.filter(
					account => account.number !== action.payload
				),
			};
		default:
			return state;
	}
}
