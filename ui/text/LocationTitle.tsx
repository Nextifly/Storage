import React from 'react'

interface ITitle {
	title: string;
}

const LocationTitle = ({title}: ITitle) => {
	return <h2 className='font-bold'>{title}</h2>
}

export default LocationTitle