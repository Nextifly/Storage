interface ITitle {
	title: string
}

const DataTitle = ({ title }: ITitle) => {
	return (
		<div className='w-full h-[27px] bg-[#38557A] px-3'>
			<h2 className='font-bold text-white'>{title}</h2>
		</div>
	)
}

export default DataTitle
