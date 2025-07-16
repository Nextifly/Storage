import React, { PropsWithChildren } from 'react'

interface ILink {
	children: PropsWithChildren<string>;
	onClick: (name: string) => void;
	company: string;
}

const AuthLink = ({children, company, onClick}: ILink) => {
	return (
		<button onClick={() => onClick(children)} className={`w-[50%] h-[39px] border-[#5A81B3] border-b-[1px] border-solid text-[#38557A] cursor-pointer font-bold ${company == children && "bg-[#38557A] text-white"} max-[428px]:w-full`}>{children}</button>
	)
}

export default AuthLink