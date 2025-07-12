import Storage5 from '@/assets/img/storage/PBC-5.png'
import Storage6 from '@/assets/img/storage/PBC-6.png'
import Storage7 from '@/assets/img/storage/PBC-7.png'
import Storage8 from '@/assets/img/storage/PBC-8.png'
import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'

const Page = () => {
	return (
		<section className='w-[100%-225px]'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Месторождения</h2>
			</div>
			<section className='flex flex-row gap-6 w-full justify-around items-center m-8'>
				<div className='bg-white py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col'>
					<LocationTitle title='ПСиПН Морское' />
					<LocationStorage img={Storage5} />
					<LocationStorage img={Storage6} />
					<LocationStorage img={Storage7} />
					<LocationStorage img={Storage8} />
				</div>
				<div className='bg-white py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col'>
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
