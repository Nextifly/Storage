import Image, { StaticImageData } from 'next/image'

interface IStorage {
	img: StaticImageData
}

const LocationStorage = ({ img }: IStorage) => {
	return (
		<div className='flex justify-between gap-3 items-end'>
			<Image src={img} alt='...' className='w-[140px] h-25' />
			<table className='border-1 border-[#4A6B95] border-solid w-30'>
				<thead>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 text-center'>
							ед.изм.
						</td>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 text-center'>
							факт. зн.
						</td>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 text-center'>
							расч. зн.
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 px-[4px]'>
							cm
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							461.000
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							461.738
						</td>
					</tr>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 px-[4px]'>
							°C
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							48.900
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							-
						</td>
					</tr>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 px-[4px]'>
							М³
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							825.897
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							827.218
						</td>
					</tr>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 px-[4px]'>
							TH
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							755.976
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							757,186
						</td>
					</tr>
					<tr>
						<td className='border-1 border-black border-solid bg-[#E2EAF5] text-[9px] w-10 px-[4px]'>
							КГ/М³
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							915.000
						</td>
						<td className='border-1 border-black border-solid text-[9px] w-10 px-[4px] bg-white'>
							-
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default LocationStorage
