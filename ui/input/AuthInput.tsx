import Image from 'next/image'
import React, { useState } from 'react'
import EyeSVG from '@/assets/svg/eye.svg'
import LoginSVG from '@/assets/svg/login.svg'

interface IInput {
	label: string;
	placeholder: string;
	type: IType;
	onChange: (text: string) => void
}

type IType = "LOGIN" | "PASSWORD"

const AuthInput = ({label, placeholder, type, onChange}: IInput) => {
	const [isActive, setIsActive] = useState<string>('password');

	return (
		<section className='w-full max-w-60'>
			<h2 className='text-[10px] font-normal ml-[5px] mb-1 mt-2'>{label}</h2>
			<div className='relative w-full h-[33px]'>
				<input type={type === 'LOGIN' ? 'text' : isActive} className='w-full h-full bg-white px-2 pr-6 outline-none text-[14px] placeholder:text-[#AAAAAA]' placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
				<Image src={type === "LOGIN" ? LoginSVG : EyeSVG} alt='...' className={`absolute top-3 right-2 ${type === 'PASSWORD' && 'cursor-pointer'}`} onClick={() => type === 'PASSWORD' && setIsActive(isActive === 'password' ? "text" : 'password')} />
			</div>
		</section>
	)
}

export default AuthInput