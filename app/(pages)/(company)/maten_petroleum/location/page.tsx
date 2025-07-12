import Storage2 from '@/assets/img/storage/PBC-2.png'
import Storage5 from '@/assets/img/storage/PBC-5.png'
import Storage5v2 from '@/assets/img/storage/PBC-5v2.png'
import Storage6 from '@/assets/img/storage/PBC-6.png'
import Storage7 from '@/assets/img/storage/PBC-7.png'
import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'

const Page = () => {
	return (
		<section className='w-[100%-225px]'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Месторождения</h2>
			</div>
			<section className='flex flex-row gap-6 w-full justify-start items-start m-8'>
				<div className='bg-white py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col'>
					<LocationTitle title='Кара-Арна' />
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
					<LocationStorage img={Storage7} />
				</div>
				<div className='bg-white py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col'>
					<LocationTitle title=' НПС Каратон' />
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
				</div>
				<div className='bg-white py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col'>
					<LocationTitle title='ПСиСН Каратон' />
					<LocationStorage img={Storage5} />
				</div>
			</section>
			<section className='m-8 border-[3px] border-[#BB0000] border-solid bg-[#A3000033]  max-w-[661px] w-full py-6 px-9'>
				<div className='flex flex-row justify-between size-full'>
					<LocationTitle title='УПН Матин' />
					<h2 className='text-[#A30000] font-bold'>Нет связи с объектом</h2>
				</div>
				<div className='flex flex-row justify-between size-full gap-[30px] mt-10'>
					<LocationStorage img={Storage2} />
					<LocationStorage img={Storage5v2} />
				</div>
			</section>
		</section>
	)
}

export default Page
