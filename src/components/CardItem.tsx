/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import crownIcon from "../assets/crown-icon.svg"

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
				<img src={crownIcon} alt="Icon" />
				<h3 className="mt-3 text-xl font-bold text-white">{name}</h3>
				<p className="mt-4 text-sm text-gray-300">{words}</p>
			</Link>
		</div>
	)
}