import React from 'react'

import AppRoutes from '../Routes/Routes'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../Home/Home'

export const App = () => {
	return (
		<div className='app'>
			<Header />
			<div className="container">
				<Home />
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}
