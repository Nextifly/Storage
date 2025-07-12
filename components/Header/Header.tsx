'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
	const pathname = usePathname()
	const [name, setName] = useState<string>('')

	useEffect(() => {
		setName('')
		if (pathname.includes('kozhan')) return setName('АО “КоЖаН”')
		if (pathname.includes('maten_petroleum'))
			return setName('АО ”Матен Петролеум”')
	}, [pathname])

	return (
		<header className='w-full h-[39px] bg-[#38557a] flex items-center'>
			<h2 className='font-bold text-white pl-[19px]'>{name}</h2>
		</header>
	)
}

export default Header
