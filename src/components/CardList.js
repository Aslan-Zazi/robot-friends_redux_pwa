import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOOOOO');
	// }
	return (
		<>
			{
				robots.map((user, index) => {
					return (
						<Card
							key={index}
							id={user.id}
							name={user.name}
							email={user.email}
						/>
					);
				})
			}
		</>
	);
}

export default CardList;