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
import { deleteCustomerAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers }) => {
	const dispatch = useDispatch();

	const deleteCustomer = customerId =>
		dispatch(deleteCustomerAction(customerId));

	const deleteHandler = customerId => {
		deleteCustomer(customerId);
	};
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Address</TableCell>
						<TableCell>City</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.map(customer => (
						<TableRow key={customer.id}>
							<TableCell>{customer.name}</TableCell>
							<TableCell>{customer.address.address1}</TableCell>
							<TableCell>{customer.address.city}</TableCell>
							<TableCell>{customer.contact.personalPhone}</TableCell>
							<TableCell>{customer.contact.personalEmail}</TableCell>
							<TableCell>
								<Link to={`/edit-customer/${customer.id}`}>
									<Button variant='contained' color='default' size='small'>
										Edit
									</Button>
								</Link>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									onClick={() => {
										deleteHandler(customer.id);
									}}
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

export default CustomerList;
