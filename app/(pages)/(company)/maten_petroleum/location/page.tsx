'use client'

import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'
import { WINCC_API } from '@/utils/WINCC_API'
import { useEffect, useState } from 'react'

const Page = () => {
	const [KaraArna, setKaraArna] = useState<Array<any>>([])
	const [KaratM, setKaratM] = useState<Array<any>>([])
	const [matin, setMatin] = useState<Array<any>>([])

	useEffect(() => {
		const loadData = async () => {
			await Promise.all([
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaraArna_RVS_2_Now.Level',
						'KaraArna_RVS_2_Now.Temp',
						'KaraArna_RVS_2_Now.Volume',
						'KaraArna_RVS_2_Now.Massa',
						'KaraArna_RVS_2_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaraArna_RVS_8_Now.Level',
						'KaraArna_RVS_8_Now.Temp',
						'KaraArna_RVS_8_Now.Volume',
						'KaraArna_RVS_8_Now.Massa',
						'KaraArna_RVS_8_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaraArna_RVS_9_Now.Level',
						'KaraArna_RVS_9_Now.Temp',
						'KaraArna_RVS_9_Now.Volume',
						'KaraArna_RVS_9_Now.Massa',
						'KaraArna_RVS_9_Now.Dens',
					],
				}),
			]).then(response => {
				setKaraArna([
					{ RVS_2: response[0].data },
					{ RVS_8: response[1].data },
					{ RVS_9: response[2].data },
				])
			})
		}
		loadData()
		const intervar = setInterval(loadData, 5000)
		return () => clearInterval(intervar)
	}, [])
	useEffect(() => {
		const loadData = async () => {
			await Promise.all([
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaratM_RVS_1_Now.Level',
						'KaratM_RVS_1_Now.Temp',
						'KaratM_RVS_1_Now.Volume',
						'KaratM_RVS_1_Now.Massa',
						'KaratM_RVS_1_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaratM_RVS_4_Now.Level',
						'KaratM_RVS_4_Now.Temp',
						'KaratM_RVS_4_Now.Volume',
						'KaratM_RVS_4_Now.Massa',
						'KaratM_RVS_4_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaratM_RVS_5_Now.Level',
						'KaratM_RVS_5_Now.Temp',
						'KaratM_RVS_5_Now.Volume',
						'KaratM_RVS_5_Now.Massa',
						'KaratM_RVS_5_Now.Dens',
					],
				}),
			]).then(response => {
				setKaratM([
					{ RVS_1: response[0].data },
					{ RVS_4: response[1].data },
					{ RVS_5: response[2].data },
				])
			})
		}
		loadData()
		const intervar = setInterval(loadData, 5000)
		return () => clearInterval(intervar)
	}, [])
	useEffect(() => {
		const loadData = async () => {
			await Promise.all([
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Matin_RVS_2_Now.Level',
						'Matin_RVS_2_Now.Temp',
						'Matin_RVS_2_Now.Volume',
						'Matin_RVS_2_Now.Massa',
						'Matin_RVS_2_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Matin_RVS_5_Now.Level',
						'Matin_RVS_5_Now.Temp',
						'Matin_RVS_5_Now.Volume',
						'Matin_RVS_5_Now.Massa',
						'Matin_RVS_5_Now.Dens',
					],
				}),
			]).then(response => {
				setMatin([{ RVS_2: response[0].data }, { RVS_5: response[1].data }])
			})
		}
		loadData()
		const intervar = setInterval(loadData, 5000)
		return () => clearInterval(intervar)
	}, [])
	return (
		<section className='w-[calc(100%-223px)] max-[618px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center py-[19px]'>
				<h2 className='text-white font-bold max-[572px]:pl-4'>Месторождения</h2>
			</div>
			<section className='flex gap-8 justify-start items-start m-4 max-[1000px]:gap-2 max-[924px]:block'>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-w-[362px] w-full  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4 max-[924px]:mb-3'>
					<LocationTitle>Кара-Арна</LocationTitle>
					{KaraArna ? (
						KaraArna.map(rvs => (
							<LocationStorage
								key={'KaraArna' + Object.keys(rvs)[0]}
								max_volume={1000}
								name={Object.keys(rvs)[0]}
								data={rvs[Object.keys(rvs)[0]]}
							/>
						))
					) : (
						<LocationStorage max_volume={1000} name='PBC-2' />
					)}
				</div>
				<section>
					<div className='flex gap-2 justify-start items-start max-[1380px]:max-w-[362px] max-[1380px]:flex-wrap'>
						<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  max-w-[362px] w-full   gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
							<LocationTitle>НПС Каратон</LocationTitle>
							<LocationStorage max_volume={5000} name='PBC-1' />
							<LocationStorage max_volume={5000} name='PBC-5' />
						</div>
						<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  max-w-[362px] w-full   gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
							<LocationTitle>ПСиСН Каратон</LocationTitle>
							<LocationStorage max_volume={1000} name='PBC-4' />
						</div>
					</div>
					<section className='shadow-[0px_4px_4px_rgba(0,0,0,0.25)] my-8 bg-[#e2eaf5]  max-w-[661px] py-6 px-9 max-[1380px]:hidden mx-4'>
						<LocationTitle>УПН Матин</LocationTitle>
						<div className='flex flex-wrap justify-between size-full gap-[30px] mt-10'>
							<LocationStorage max_volume={1000} name='PBC-2' />
							<LocationStorage max_volume={1000} name='PBC-5' />
						</div>
					</section>
				</section>
			</section>
			<section className='shadow-[0px_4px_4px_rgba(0,0,0,0.25)] my-8 bg-[#e2eaf5]  max-w-[661px] py-6 px-9 min-[1380px]:hidden mx-4 max-[1000px]:py-3 max-[1000px]:px-4'>
				<LocationTitle>УПН Матин</LocationTitle>
				<div className='flex flex-wrap justify-between size-full gap-[30px] mt-10'>
					<LocationStorage max_volume={1000} name='PBC-2' />
					<LocationStorage max_volume={1000} name='PBC-5' />
				</div>
			</section>
		</section>
	)
}

export default Page
