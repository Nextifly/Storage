import Status from '@/ui/element/Status'
import DataTitle from '@/ui/text/DataTitle'

const Page = () => {
	return (
		<section className='w-[calc(100%-223px)] max-[670px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Сбор данных</h2>
			</div>
			<section className='flex flex-col gap-12 m-4'>
				<div className='max-w-[362px]  bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px]'>
					<DataTitle>SCADA SERVER</DataTitle>
					<h2 className='font-bold px-3'>IP: 192.168.100.242</h2>
					<h2 className='font-bold px-3'>Password: ● ● ● ● ● ● ● ●</h2>
					<h2 className='font-bold px-3 flex flex-wrap justify-start items-center gap-[10px]'>
						Status: <Status status='CONNECT' />{' '}
					</h2>
				</div>
				<div className='w-full max-w-[510px] max-[700px]:max-w-[362px] bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px]'>
					<DataTitle>PLC STATUS:</DataTitle>
					<div className='flex flex-wrap gap-20 justify-between items-start max-[768px]:gap-4 '>
						<div className=' flex flex-col gap-2 w-[215px] max-[700px]:w-full'>
							<DataTitle>PLC_Morsk:</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-5: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-6: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-7: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-8: <Status status='CONNECT' />{' '}
							</h2>
						</div>
						<div className=' flex flex-col gap-2 w-[215px] max-[700px]:w-full'>
							<DataTitle>PLC_Karaton_K</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-1: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-4: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-5: <Status status='CONNECT' />{' '}
							</h2>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}

export default Page
