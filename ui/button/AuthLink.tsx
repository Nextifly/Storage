import React from 'react'

interface ILink {
	name: string;
	onClick: (name: string) => void;
	company: string;
}

const AuthLink = ({name, company, onClick}: ILink) => {
	return (
		<button onClick={() => onClick(name)} className={`w-[50%] h-[39px] border-[#5A81B3] border-b-[1px] border-solid text-[#38557A] cursor-pointer font-bold ${company == name && "bg-[#38557A] text-white"} max-[428px]:w-full`}>{name}</button>
	)
}

export default AuthLink