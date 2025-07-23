'use client'

import DataTitle from '@/ui/text/DataTitle'
import ReloadSVG from '@/assets/svg/reload.svg'
import { SCADAcorrection } from '@/utils/correction'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Page = () => {
const [date, setDate] = useState<string>();
  const [ver, setVer] = useState<number>(0);

  useEffect(() => {
	if (!localStorage.getItem("date")) {
		getCurrentDateFormatter()
	} else {
		setDate(localStorage.getItem("date") as string)
	}
	if (!localStorage.getItem("ver")) {
		getCurrentDateFormatter()
	} else {
		setVer(parseInt(localStorage.getItem("ver") as string))
	}
  }, []);

  const getCurrentDateFormatter = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = now.getFullYear();

	let newVer = 1;

	if (localStorage.getItem("ver")) {
		newVer = parseInt(localStorage.getItem("ver") as string) + 1
	}

    localStorage.setItem("ver", newVer.toString());
    localStorage.setItem("date",`${day}.${month}.${year}`);

	setDate(`${day}.${month}.${year}`);
	setVer(newVer)
  };
	return (
		<section className='w-[calc(100%-223px)] max-[620px]:w-[calc(100%-180px)] max-[572px]:w-full'>
			<div className='w-full h-[39px] bg-[#38557A] flex items-center pl-[19px]'>
				<h2 className='text-white font-bold'>Настройка коррекции</h2>
			</div>
			<section className='m-4 max-w-[420px] max-[572px]:mx-auto max-[572px]:px-4'>
				<div className='w-full h-[27px] bg-[#38557A] px-3 flex justify-between items-center'>
					<h2 className='font-bold text-[#e2eaf5]'>AI correction</h2>
					<div className='flex justify-end gap-4'>
						<span className='text-[#E2EAF5] text-[8px]'>
							Last date of learning : {date} Ver.{ver}
						</span>
						<Image src={ReloadSVG} alt='...' className='size-[12px] cursor-pointer' onClick={() => getCurrentDateFormatter()} />
					</div>
				</div>
				<div className='py-2 bg-white'></div>
				<DataTitle>PLC_Morsk:</DataTitle>
				<div className='py-2 bg-white px-3 flex flex-col gap-2'>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 5:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[0].correction[0].correction}
						</p>
					</div>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 6:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[0].correction[1].correction}
						</p>
					</div>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 7:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[0].correction[2].correction}
						</p>
					</div>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 8:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[0].correction[3].correction}
						</p>
					</div>
				</div>
				<DataTitle>PLC_Karaton_K</DataTitle>
				<div className='py-2 bg-white px-3 flex flex-col gap-2'>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 1:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[1].correction[0].correction}
						</p>
					</div>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 4:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[1].correction[1].correction}
						</p>
					</div>
					<div className='flex flex-wrap gap-2 justify-between'>
						<h2 className='font-bold'>RVS - 5:</h2>
						<p className='max-[670px]:text-[12px]'>Коэффициент коррекции ИИ:</p>
						<p className='max-[670px]:text-[12px]'>
							{SCADAcorrection[1].correction[2].correction}
						</p>
					</div>
				</div>
			</section>
		</section>
	)
}

export default Page