'use client'

import UserIMG from '@/assets/img/user.png'
import MyToast from '@/ui/MyToast'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const MyNav = () => {
	const router = useRouter()
	const pathname = usePathname()
	const [name, setName] = useState<string>('')
	const [company, setCompany] = useState<string>('')
	const [activePage, setActivePage] = useState<string>('')

	useEffect(() => {
		const userName = localStorage.getItem('login')
		if (!userName) return router.push('/auth')
		setName(userName)
	}, [])

	useEffect(() => {
		console.log(pathname)
		if (pathname.includes('kozhan')) {
			setCompany('kozhan')
			if (pathname.includes('location')) setActivePage('location')
			if (pathname.includes('data')) setActivePage('data')
			if (pathname.includes('correction')) setActivePage('correction')
			return
		}
		if (pathname.includes('maten_petroleum')) {
			setCompany('maten_petroleum')
			if (pathname.includes('location')) setActivePage('location')
			if (pathname.includes('data')) setActivePage('data')
			if (pathname.includes('correction')) setActivePage('correction')
			return
		}
	}, [pathname])

	const handleLeave = () => {
		localStorage.removeItem('login')
		MyToast({ message: 'Успешный выход!', type: 'success' })
		setTimeout(() => {
			router.push('/auth')
		}, 2000)
	}

	return (
		<nav className='w-[223px] bg-[#38557A] py-2 max-[618px]:w-[180px] max-[572px]:w-full'>
			<div className='flex items-center gap-[11px] pl-[12px] mb-5 max-[572px]:hidden'>
				<Image src={UserIMG} alt='...' className='w-12 h-12' />
				<h2 className='text-white text-[12px] font-semibold'>{name}</h2>
			</div>
			<ul className='bg-[#E2EAF5] pl-6 pr-3 flex flex-col'>
				<Link
					href='#'
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D] ${
						activePage == 'about' && 'font-extrabold'
					}`}
				>
					Главное меню
				</Link>
				<Link
					href={`/${company}/location`}
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D] ${
						activePage == 'location' && 'font-extrabold'
					}`}
				>
					Месторождения
				</Link>
				<Link
					href={`/${company}/data`}
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D] ${
						activePage == 'data' && 'font-extrabold'
					}`}
				>
					Сбор данных
				</Link>
				<Link
					href={`/${company}/correction`}
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D] ${
						activePage == 'correction' && 'font-extrabold'
					}`}
				>
					Настройка коррекции
				</Link>
				<Link
					href='#'
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D] ${
						activePage == 'notif' && 'font-bold'
					}`}
				>
					Настройка уведомление
				</Link>
				<h2
					onClick={handleLeave}
					className={`cursor-pointer h-[31px] flex items-center text-[12px] text-[#0D223D]`}
				>
					Выход
				</h2>
			</ul>
		</nav>
	)
}

export default MyNav
