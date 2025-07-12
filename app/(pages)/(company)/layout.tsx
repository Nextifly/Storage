'use client'

import { MyNav } from '@/components'

export default function CompanyLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section className='flex items-start justify-start w-full h-[calc(100%-39px)] border-t-[1px] border-[#5A81B3] border-solid'>
			<MyNav />
			{children}
		</section>
	)
}
