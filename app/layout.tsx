import { Header } from '@/components/index'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Storage',
	description: 'Storage',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className='min-h-full min-w-full size-full overflow-x-hidden'>
			<body className={`antialiased size-full overflow-x-hidden bg-[#a4b9d4] ${inter.variable}`}>
				<Header />
				{children}
				<Toaster />
			</body>
		</html>
	)
}
