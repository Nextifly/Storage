import React, { PropsWithChildren } from 'react'

interface ITitle {
	children: PropsWithChildren<string>
}

const LocationTitle = ({children}: ITitle) => {
	return <h2 className='font-bold'>{children}</h2>
}

export default LocationTitle