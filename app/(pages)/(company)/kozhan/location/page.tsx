'use client'

import LocationStorage from '@/components/LocationStorage/LocationStorage'
import LocationTitle from '@/ui/text/LocationTitle'
import { WINCC_API } from '@/utils/WINCC_API'
import { useEffect, useState } from 'react'

const Page = () => {
	const [Morskoe, setMorskoe] = useState<Array<any>>([])
	const [KaratM, setKaratM] = useState<Array<any>>([])

	useEffect(() => {
		const loadData = async () => {
			await Promise.all([
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Morskoe_RVS_5_Now.Level',
						'Morskoe_RVS_5_Now.Temp',
						'Morskoe_RVS_5_Now.Volume',
						'Morskoe_RVS_5_Now.Massa',
						'Morskoe_RVS_5_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Morskoe_RVS_6_Now.Level',
						'Morskoe_RVS_6_Now.Temp',
						'Morskoe_RVS_6_Now.Volume',
						'Morskoe_RVS_6_Now.Massa',
						'Morskoe_RVS_6_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Morskoe_RVS_7_Now.Level',
						'Morskoe_RVS_7_Now.Temp',
						'Morskoe_RVS_7_Now.Volume',
						'Morskoe_RVS_7_Now.Massa',
						'Morskoe_RVS_7_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'Morskoe_RVS_8_Now.Level',
						'Morskoe_RVS_8_Now.Temp',
						'Morskoe_RVS_8_Now.Volume',
						'Morskoe_RVS_8_Now.Massa',
						'Morskoe_RVS_8_Now.Dens',
					],
				}),
			]).then(response => {
				setMorskoe([
					{ RVS_5: response[0].data },
					{ RVS_6: response[1].data },
					{ RVS_7: response[2].data },
					{ RVS_8: response[3].data },
				])
			})
		}
		loadData()
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
						'KaratM_RVS_2_Now.Level',
						'KaratM_RVS_2_Now.Temp',
						'KaratM_RVS_2_Now.Volume',
						'KaratM_RVS_2_Now.Massa',
						'KaratM_RVS_2_Now.Dens',
					],
				}),
				WINCC_API.post('/tagManagement/values', {
					variableNames: [
						'KaratM_RVS_3_Now.Level',
						'KaratM_RVS_3_Now.Temp',
						'KaratM_RVS_3_Now.Volume',
						'KaratM_RVS_3_Now.Massa',
						'KaratM_RVS_3_Now.Dens',
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
					{ RVS_2: response[1].data },
					{ RVS_3: response[2].data },
					{ RVS_4: response[3].data },
					{ RVS_5: response[4].data },
				])
			})
		}
		loadData()
	}, [])

	return (
		<section className='w-[calc(100%-223px)] max-[618px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Месторождения</h2>
			</div>
			<section className='flex flex-wrap gap-6 justify-around items-center m-4 max-[1036px]:justify-start'>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
					<LocationTitle>ПСиПН Морское</LocationTitle>
					{Morskoe ? (
						Morskoe.map(pvs => (
							<LocationStorage
								max_volume={5000}
								key={'Morskoe' + Object.keys(pvs)[0]}
								name={Object.keys(pvs)[0]}
								data={pvs[Object.keys(pvs)[0]]}
							/>
						))
					) : (
						<LocationStorage max_volume={5000} name='-' />
					)}
				</div>
				<div className='bg-[#e2eaf5] py-6 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[362px]  gap-[30px] flex flex-col max-[1000px]:py-3 max-[1000px]:px-4'>
					<LocationTitle>ПСиСН Каратон</LocationTitle>
					{KaratM ? (
						KaratM.map(pvs => (
							<LocationStorage
								max_volume={5000}
								key={'KaratM' + Object.keys(pvs)[0]}
								name={Object.keys(pvs)[0]}
								data={pvs[Object.keys(pvs)[0]]}
							/>
						))
					) : (
						<LocationStorage max_volume={5000} name='-' />
					)}
				</div>
			</section>
		</section>
	)
}

export default Page
