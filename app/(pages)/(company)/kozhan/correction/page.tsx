import DataTitle from '@/ui/text/DataTitle'

const Page = () => {
	return (
		<section className='w-[100%]'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Настройка коррекции</h2>
			</div>
			<section className='m-4 w-[420px]'>
				<div className='w-full h-[27px] bg-[#38557A] px-3 flex justify-between items-center'>
					<h2 className='font-bold text-white'>AI correction</h2>
					<span className='text-[#E2EAF5] text-[8px]'>
						Last date of learning : 31.12.2024 Ver.22
					</span>
				</div>
				<div className='py-2 bg-white'></div>
				<DataTitle title='PLC_Morsk:' />
				<div className='py-2 bg-white px-3 flex flex-col gap-2'>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 5:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>+0,0016</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 6:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>+0,0005</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 7:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>+0,0001</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 8:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>-0,0003</p>
					</div>
				</div>
				<DataTitle title='PLC_Karaton_K' />
				<div className='py-2 bg-white px-3 flex flex-col gap-2'>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 1:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>-0,0017</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 2:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>-0,0019</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 3:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>+0,0001</p>
					</div>
					<div className='flex flex-row gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 4:</h2>
						<p>Коэффициент коррекции ИИ:</p>
						<p>-0,0015</p>
					</div>
				</div>
			</section>
		</section>
	)
}

export default Page
