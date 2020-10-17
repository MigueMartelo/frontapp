import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';

const CustomerList = ({ customers }) => {
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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CustomerList;
