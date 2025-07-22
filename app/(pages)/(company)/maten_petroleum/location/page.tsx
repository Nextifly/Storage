'use client'

import Storage2 from '@/assets/img/storage/PBC-2.png'
import Storage5 from '@/assets/img/storage/PBC-5.png'
import Storage5v2 from '@/assets/img/storage/PBC-5v2.png'
import Storage6 from '@/assets/img/storage/PBC-6.png'
import Storage7 from '@/assets/img/storage/PBC-7.png'
import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'
import { useEffect } from 'react'

const Page = () => {
	
	useEffect(() => {
		
	}, [])
	return (
		<section className='w-[calc(100%-223px)] max-[618px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center py-[19px]'>
				<h2 className='text-white font-bold max-[572px]:pl-4'>Месторождения</h2>
			</div>
			<section className='flex gap-8 justify-start items-start m-4 max-[1000px]:gap-2 max-[924px]:block'>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-[362px] w-full  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4 max-[924px]:mb-3'>
					<LocationTitle>Кара-Арна</LocationTitle>
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
					<LocationStorage img={Storage7} />
				</div>
				<section>
					<div className='flex gap-2 justify-start items-start max-[1380px]:max-w-[362px] max-[1380px]:flex-wrap'>
						<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  max-w-[362px] w-full   gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
							<LocationTitle>НПС Каратон</LocationTitle>
							<LocationStorage img={Storage5} />
							<LocationStorage img={Storage6} />
						</div>
						<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  max-w-[362px] w-full   gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
							<LocationTitle>ПСиСН Каратон</LocationTitle>
							<LocationStorage img={Storage5} />
						</div>
					</div>
					<section className='my-8 border-[3px] border-[#BB0000] border-solid bg-[#A3000033]  max-w-[661px] w-full py-6 px-9 max-[1380px]:hidden'>
						<div className='flex flex-wrap justify-between size-full'>
							<LocationTitle>УПН Матин</LocationTitle>
							<h2 className='text-[#A30000] font-bold'>Нет связи с объектом</h2>
						</div>
						<div className='flex flex-wrap justify-between size-full gap-[30px] mt-10'>
							<LocationStorage img={Storage2} />
							<LocationStorage img={Storage5v2} />
						</div>
					</section>
				</section>
			</section>
			<section className='my-8 border-[3px] border-[#BB0000] border-solid bg-[#A3000033]  max-w-[661px] py-6 px-9 min-[1380px]:hidden mx-4 max-[1000px]:py-3 max-[1000px]:px-4'>
				<div className='flex flex-wrap justify-between size-full'>
					<LocationTitle>УПН Матин</LocationTitle>
					<h2 className='text-[#A30000] font-bold'>Нет связи с объектом</h2>
				</div>
				<div className='flex flex-wrap justify-between size-full gap-[30px] mt-10'>
					<LocationStorage img={Storage2} />
					<LocationStorage img={Storage5v2} />
				</div>
			</section>
		</section>
	)
}

export default Page
