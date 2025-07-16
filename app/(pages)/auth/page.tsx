'use client'

import AuthLink from '@/ui/button/AuthLink'
import AuthInput from '@/ui/input/AuthInput'
import MyToast from '@/ui/MyToast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [company, setCompany] = useState<string>('АО ”Матен Петролеум”')
	const router = useRouter()

	const handleClick = () => {
		if (login.length === 0)
			return MyToast({ message: 'Введите логин!', type: 'error' })

		if (password.length === 0)
			return MyToast({ message: 'Введите пароль!', type: 'error' })

		localStorage.setItem('login', login)

		MyToast({ message: 'Вход успешно совершён!', type: 'success' })
		setTimeout(
			() =>
				router.push(
					company === 'АО ”Матен Петролеум”'
						? '/maten_petroleum/location'
						: '/kozhan/location'
				),
			2000
		)
	}

	return (
		<section className='flex justify-center items-center size-full'>
			<div className='max-w-[482px] mx-4 w-full  bg-[#E2EAF5] mt-[-39px] shadow-[0px_4px_20px_#7E99BB]'>
				<nav className='w-full flex items-center justify-center max-[428px]:flex-col'>
					<AuthLink
						onClick={setCompany}
						company={company}
					>АО ”Матен Петролеум”</AuthLink>
					<AuthLink onClick={setCompany} company={company}>АО “КоЖаН”</AuthLink>
				</nav>
				<form className='flex flex-col justify-center items-center px-3 my-11'>
					<AuthInput
						placeholder='Login'
						label='Логин'
						onChange={setLogin}
						type='LOGIN'
					/>
					<AuthInput
						placeholder='Password'
						label='Пароль'
						onChange={setPassword}
						type='PASSWORD'
					/>
					<button
						type='button'
						className='max-w-60 w-full mt-8 cursor-pointer h-[35px] bg-[#38557A] text-white font-bold'
						onClick={handleClick}
					>
						Войти
					</button>
				</form>
			</div>
		</section>
	)
}

export default Page
