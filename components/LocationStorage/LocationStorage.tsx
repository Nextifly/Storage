import Image, { StaticImageData } from 'next/image'
import StorageIMG from '@/assets/img/storage.png'

interface IStorage {
	name: string;
	max_volume: number;
	data?: void;
}

const LocationStorage = ({ name, data, max_volume }: IStorage) => {
	return (
		<div className='flex justify-between gap-3 items-end'>
			<div className="w-[140px] h-25 relative">
				<Image src={StorageIMG} alt='...' className='size-full' />
				<div className='absolute bottom-0 left-5 w-[55px]'>
					<h2 className='font-bold text-[10px] mb-1'>{name}</h2>
					<div className='relative ml-2 w-[23px] h-[59px] border-[0.5] border-b-1 border-black border-solid'>
						<div className={`absolute insert-x-0 bottom-0 h-[calc(59px*(${data ? data[2]["value"] : 0}/${max_volume}))] w-full bg-black`} style={{background: "linear-gradient(122.73deg, #534F4F 3.67%, #656060 20.04%, #B9B0B0 38.35%, #656060 58.58%, #534F4F 74.95%, #B9B0B0 91.81%)"}}></div>
					</div>
				</div>
			</div>
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
							{data ? data[0]["value"] : 0}
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
							{data ? data[1]["value"] : 0}
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
							{data ? data[2]["value"] : 0}
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
							{data ? data[3]["value"] : 0}
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
							{data ? data[4]["value"] : 0}
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
