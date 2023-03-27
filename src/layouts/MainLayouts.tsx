import React from 'react';
import Header from '../components/header/header';
import { Outlet } from 'react-router-dom';
export const MainLayouts: React.FC = () => {
	return (
		<div className="wrapper">
			<div className="content">
				<Header />
				<Outlet />
			</div>
		</div>
	);
};
export default MainLayouts;
