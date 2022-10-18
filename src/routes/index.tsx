import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
		</Routes>
	)
}

export default AppRoutes;