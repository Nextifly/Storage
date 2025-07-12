import Storage5 from '@/assets/img/storage/PBC-5.png'
import Storage6 from '@/assets/img/storage/PBC-6.png'
import Storage7 from '@/assets/img/storage/PBC-7.png'
import Storage8 from '@/assets/img/storage/PBC-8.png'
import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'

const Page = () => {
	return (
		<section className='w-[calc(100%-223px)] max-[618px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Месторождения</h2>
			</div>
			<section className='flex flex-wrap gap-6 justify-around items-center m-4 max-[1036px]:justify-start'>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
					<LocationTitle title='ПСиПН Морское' />
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
					<LocationStorage img={Storage7} />
					<LocationStorage img={Storage8} />
				</div>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
					<LocationTitle title='ПСиСН Каратон' />
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
					<LocationStorage img={Storage7} />
					<LocationStorage img={Storage8} />
				</div>
			</section>
		</section>
	)
}

export default Page
