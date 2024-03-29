import React from 'react';
import Preload from '@/public/preload.png';

export default function loading() {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh',
				backgroundImage: `uri(${Preload})`,
			}}></div>
	);
}
