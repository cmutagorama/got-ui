import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import Books from '../pages/books';
import Characters from '../pages/characters';
import Home from '../pages/home';
import House from '../pages/house';
import { NoMatch } from '../pages/nomatch';

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/characters' element={<Characters />} />
			<Route path='/books' element={<Books />} />
			<Route path='/house/:id' element={<House />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	)
}

export default AppRoutes;