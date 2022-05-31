import React from 'react';

export const Motorbike = ({
	name,
	date,
	active,
	phone,
	price,
	role,
	licensePlate,
}) => (
	<li>
		<p>{name}</p>
		<small>
			<time>{date}</time>
		</small>
		<p>{active}</p>
		<p>{phone}</p>
		<p>{price}</p>
		<p>{role}</p>
		<p>{licensePlate}</p>
	</li>
);
