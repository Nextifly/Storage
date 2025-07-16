import { PropsWithChildren } from 'react'

const DataTitle = ({ children }: {children: PropsWithChildren<string>}) => {
	return (
		<div className='w-full h-[27px] bg-[#38557A] px-3'>
			<h2 className='font-bold text-[#e2eaf5]'>{children}</h2>
		</div>
	)
}

export default DataTitle
