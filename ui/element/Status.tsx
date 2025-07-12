interface IStatus {
	status: TStatus
}
type TStatus = 'CONNECT' | 'DISCONNECT'

const Status = ({ status }: IStatus) => {
	return status === 'CONNECT' ? (
		<div className='w-20 h-[23px] bg-[#00A103] flex items-center justify-center'>
			<h2 className='font-medium text-[12px] text-white'>Connected</h2>
		</div>
	) : (
		<div className='w-24 h-[23px] bg-[#A30000] flex items-center justify-center'>
			<h2 className='font-medium text-[12px] text-white'>Disconnected</h2>
		</div>
	)
}

export default Status
