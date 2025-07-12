'use client'

import { MyNav } from '@/components'
import { usePathname } from 'next/navigation'

export default function CompanyLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section className='flex items-start justify-start w-full h-full border-t-[1px] border-[#5A81B3] border-solid'>
			<MyNav />
			{children}
		</section>
	)
}
