import React, { useState, useEffect } from 'react';

// import { Motorbike } from './components/Motorbike.js';
import { getAllMotorbikes } from './services/getAllMotorbikes.js';
import { createMotorbike } from './services/createMotorbike.js';

const App = (props) => {
	const [motorbikes, setMotorbikes] = useState([]);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [price, setPrice] = useState('');
	const [role, setRole] = useState('');
	const [licensePlate, setLicensePlate] = useState('');
	// const [showActive, setShowActive] = useState(true);

	useEffect(() => {
		getAllMotorbikes().then((motorbikes) => {
			setMotorbikes(motorbikes);
		});
	}, []);

	const handleChangeName = (event) => {
		setName(event.target.value);
	};
	const handleChangePhone = (event) => {
		setPhone(event.target.value);
	};
	const handleChangePrice = (event) => {
		setPrice(event.target.value);
	};
	const handleChangeRole = (event) => {
		setRole(event.target.value);
	};
	const handleChangeLicensePlate = (event) => {
		setLicensePlate(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newMotorbiketoAddToState = {
			name,
			date: new Date().toISOString(),
			active: Math.random() < 0.5,
			phone,
			price,
			role,
			licensePlate,
		};

		createMotorbike(newMotorbiketoAddToState).then((newMotorbike) => {
			setMotorbikes([...motorbikes, newMotorbike]);
		});

		setName('');
		setPhone('');
		setPrice('');
		setRole('');
		setLicensePlate('');
	};

	// const handleShowActive = () => {
	// 	setShowActive(() => !showActive);
	// };

	return (
		<div>
			<h1>Motos</h1>
			{/* <button onClick={handleShowActive}>
				{showActive ? 'Mostar sólo activos' : 'Mostar todos'}
			</button>
			<ul>
				{motorbikes
					.filter((motorbike) => (showActive ? true : motorbike.active))
					.map((motorbike) => (
						<Motorbike key={motorbike.id} {...motorbike} />
					))}
			</ul> */}
			<form
				onSubmit={handleSubmit}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<strong>Nombre:</strong>{' '}
				<input
					style={{
						padding: '10px',
						margin: '10px 0',
						border: '1px solid black',
						borderRadius: '5px',
					}}
					type="text"
					onChange={handleChangeName}
					value={name}
				/>
				<br />
				<strong>Teléfono:</strong>{' '}
				<input
					style={{
						padding: '10px',
						margin: '10px 0',
						border: '1px solid black',
						borderRadius: '5px',
					}}
					type="text"
					onChange={handleChangePhone}
					value={phone}
				/>
				<br />
				<strong>Precio por hora:</strong>{' '}
				<input
					style={{
						padding: '10px',
						margin: '10px 0',
						border: '1px solid black',
						borderRadius: '5px',
					}}
					type="text"
					onChange={handleChangePrice}
					value={price}
				/>
				<br />
				<strong>Rol:</strong>{' '}
				<input
					style={{
						padding: '10px',
						margin: '10px 0',
						border: '1px solid black',
						borderRadius: '5px',
					}}
					type="text"
					onChange={handleChangeRole}
					value={role}
				/>
				<br />
				<strong>Patente:</strong>{' '}
				<input
					style={{
						padding: '10px',
						margin: '10px 0',
						border: '1px solid black',
						borderRadius: '5px',
					}}
					type="text"
					onChange={handleChangeLicensePlate}
					value={licensePlate}
				/>
				<br />
				<button
					style={{
						padding: '10px',
						backgroundColor: '#00AAFF',
						border: 'none',
						color: 'white',
						fontSize: '16px',
						fontWeight: 'bold',
					}}
				>
					Crear moto
				</button>
			</form>
		</div>
	);
};

export default App;
