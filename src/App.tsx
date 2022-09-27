import React from 'react'
import { Routes, Route, } from 'react-router-dom'


import MainLayouts from './layouts/MainLayouts';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';


function App() {


	return (
		<Routes>
			<Route path='/' element={<MainLayouts/>}>
				<Route path='*' element={<NotFound />} />
				<Route path='pizza/:id' element={<FullPizza />} />
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				Redirect
			</Route>
		</Routes>

	);
}

export default App;
