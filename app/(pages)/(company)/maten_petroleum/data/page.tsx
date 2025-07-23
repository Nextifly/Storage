import Status from '@/ui/element/Status'
import DataTitle from '@/ui/text/DataTitle'

const Page = () => {
	return (
		<section className='max-[670px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Сбор данных</h2>
			</div>
			<section className='flex flex-col gap-12 m-4'>
				<div className='max-w-[362px]  bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px]'>
					<DataTitle>SCADA SERVER</DataTitle>
					<h2 className='font-bold px-3'>IP: 192.168.100.252</h2>
					<h2 className='font-bold px-3'>Password: ● ● ● ● ● ● ● ●</h2>
					<h2 className='font-bold px-3 flex flex-wrap justify-start items-center gap-[10px]'>
						Status: <Status status='CONNECT' />{' '}
					</h2>
				</div>
				<div className='w-full max-w-[1100px]  bg-[#E2EAF5] flex flex-col gap-[14px] pb-[14px] max-[670px]:max-w-[362px]'>
					<DataTitle>PLC STATUS:</DataTitle>
					<div className='flex flex-wrap gap-20 justify-start items-start max-[670px]:justify-center'>
						<div className=' flex flex-col gap-2 w-[215px] max-[670px]:w-full'>
							<DataTitle>PLC_KaraArna:</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-2: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-8: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-9: <Status status='CONNECT' />{' '}
							</h2>
						</div>
						<div className=' flex flex-col gap-2 w-[215px] max-[670px]:w-full'>
							<DataTitle>PLC_Karaton_M</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-1: <Status status='CONNECT' />{' '}
							</h2>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-5: <Status status='CONNECT' />{' '}
							</h2>
						</div>
						<div className=' flex flex-col gap-2 w-[215px] max-[670px]:w-full'>
							<DataTitle>PLC_Karaton_K</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-4: <Status status='CONNECT' />{' '}
							</h2>
						</div>
						<div className=' flex flex-col gap-2 w-[215px] max-[670px]:w-full'>
							<DataTitle>PLC_Matin</DataTitle>
							<h2 className='font-bold px-3 flex flex-wrap justify-between items-center gap-[10px]'>
								PVS-2: <Status status='CONNECT' />{' '}
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
