import React, { FC } from 'react';

type RowProps = {
	title: string;
	text: string;
	isGray: boolean;
}

export const RowDetail: FC<RowProps> = ({ title, text, isGray }: RowProps) => {
	return (
		<div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${isGray ? 'bg-gray-50' : 'bg-white'}`}>
			<dt className="text-sm font-medium text-gray-500">{title}</dt>
			<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{text}</dd>
		</div>
	)
}