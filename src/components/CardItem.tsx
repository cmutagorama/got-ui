/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

type CardProps = {
	name: string;
	words: string;
	url: string;
}

export function CardItem({ name, words, url }: CardProps) {
	return (
		<div style={{ height: '210px' }}>
			<Link
				className="block h-full p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl"
				to={`/house/${url}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-10 h-10 text-blue-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M12 14l9-5-9-5-9 5 9 5z" />
					<path
						d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
					/>
				</svg>
				<h3 className="mt-3 text-xl font-bold text-white">{name}</h3>
				<p className="mt-4 text-sm text-gray-300">{words}</p>
			</Link>
		</div>
	)
}