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
import { saveCustomerAction, editCustomerAction } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const CustomerForm = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const addCustomer = customer => dispatch(saveCustomerAction(customer));
	const editCustomer = customer => dispatch(editCustomerAction(customer));

	let history = useHistory();

	const [name, setName] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [country, setCountry] = useState('');
	const [personalPhone, setPersonalPhone] = useState('');
	const [workPhone, setWorkPhone] = useState('');
	const [personalEmail, setPersonalEmail] = useState('');
	const [workEmail, setWorkEmail] = useState('');

	const { customerId } = useParams();

	useEffect(() => {
		const setCustomer = async customerId => {
			const response = await axios.get(
				`http://localhost:9000/customer/${customerId}`
			);
			const customer = response.data.response;
			setName(customer.name);
			setAddress1(customer.address.address1);
			setAddress2(customer.address.address2);
			setCity(customer.address.city);
			setState(customer.address.state);
			setPostalCode(customer.address.postalCode);
			setCountry(customer.address.country);
			setPersonalPhone(customer.contact.personalPhone);
			setPersonalEmail(customer.contact.personalEmail);
			setWorkEmail(customer.contact.workEmail);
			setWorkPhone(customer.contact.workPhone);
		};

		if (customerId) {
			setCustomer(customerId);
		}
	}, [customerId]);

	const handleChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'address1':
				setAddress1(value);
				break;
			case 'address2':
				setAddress2(value);
				break;
			case 'city':
				setCity(value);
				break;
			case 'state':
				setState(value);
				break;
			case 'postalCode':
				setPostalCode(value);
				break;
			case 'country':
				setCountry(value);
				break;
			case 'personalPhone':
				setPersonalPhone(value);
				break;
			case 'workPhone':
				setWorkPhone(value);
				break;
			case 'personalEmail':
				setPersonalEmail(value);
				break;
			case 'workEmail':
				setWorkEmail(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		const customer = {
			name,
			address: {
				address1,
				address2,
				postalCode,
				city,
				state,
				country,
			},
			contact: {
				personalPhone,
				workPhone,
				personalEmail,
				workEmail,
			},
		};

		if (customerId) {
			customer.id = Number(customerId);
			customer.status = 'ACTIVE';
			editCustomer(customer);
		} else {
			addCustomer(customer);
		}

		history.push('/customers');
	};

	return (
		<Grid container item xs={12} justify='center'>
			<form className={classes.root} onSubmit={handleSubmit}>
				<FormControl fullWidth>
					<TextField
						variant='outlined'
						name='name'
						label='Full Name'
						value={name}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl fullWidth>
					<TextField
						variant='outlined'
						name='address1'
						label='Address 1'
						value={address1}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl fullWidth>
					<TextField
						variant='outlined'
						name='address2'
						label='Address 2'
						value={address2}
						onChange={handleChange}
					/>
				</FormControl>
				<Grid container item justify='space-between'>
					<TextField
						variant='outlined'
						name='city'
						label='City'
						value={city}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='state'
						label='State'
						value={state}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='postalCode'
						label='Postal Code'
						value={postalCode}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='country'
						label='Country'
						value={country}
						onChange={handleChange}
					/>
				</Grid>
				<Grid container item justify='space-between'>
					<TextField
						variant='outlined'
						name='personalPhone'
						label='Personal Phone'
						value={personalPhone}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='workPhone'
						label='Work Phone'
						value={workPhone}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='personalEmail'
						label='Personal Email'
						value={personalEmail}
						onChange={handleChange}
					/>
					<TextField
						variant='outlined'
						name='workEmail'
						label='Work Email'
						value={workEmail}
						onChange={handleChange}
					/>
				</Grid>
				<Button type='submit' color='primary' variant='contained' size='large'>
					Save
				</Button>
			</form>
		</Grid>
	);
};

export default CustomerForm;
