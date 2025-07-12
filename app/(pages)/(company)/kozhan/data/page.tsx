import Status from '@/ui/element/Status'
import DataTitle from '@/ui/text/DataTitle'

const Page = () => {
	return (
		<section className='w-[100%]'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Сбор данных</h2>
			</div>
			<section className='flex flex-col gap-12 m-4'>
				<div className='w-[362px]  bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px]'>
					<DataTitle title='SCADA SERVER' />
					<h2 className='font-bold px-3'>IP: 192.168.100.242</h2>
					<h2 className='font-bold px-3'>Password: ● ● ● ● ● ● ● ●</h2>
					<h2 className='font-bold px-3 flex flex-row justify-start items-center gap-[10px]'>
						Status: <Status status='CONNECT' />{' '}
					</h2>
				</div>
				<div className='w-full max-w-[510px]  bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px]'>
					<DataTitle title='PLC STATUS:' />
					<div className='flex flex-row gap-20 justify-between items-start'>
						<div className=' flex flex-col gap-2 w-[215px]'>
							<DataTitle title='PLC_Morsk:' />
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-5: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-6: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-7: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-8: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								FIT1: <Status status='CONNECT' />{' '}
							</h2>
						</div>
						<div className=' flex flex-col gap-2 w-[215px]'>
							<DataTitle title='PLC_Karaton_K' />
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-1: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-2: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-3: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-row justify-between items-center gap-[10px]'>
								PVS-4: <Status status='CONNECT' />{' '}
							</h2>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}

export default Page
