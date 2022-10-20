import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import House from '../pages/house';
import { NoMatch } from '../pages/nomatch';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='house/:id' element={<House />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export default AppRoutes;