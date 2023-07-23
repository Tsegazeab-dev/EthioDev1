import React from 'react'
import "./Hamburger";
import './Header.css'

import logo from '../images/green nature  illustration logo template social media (1).png'
function Header() {
  return (
		<header className="flex shadow-md  items-center justify-between sticky top-0 z-50">
			<div className="p-2">
				<img className="relative  rounded-md h-28 cursor-pointer" src={logo} />
			</div>

			<div className="">
				<p className="text-xl font-serif font-bold text-center">
					LEMLEM SCHOOL
				</p>
			</div>

			<div className="">
				<ul className="font-medium nav-link font-serif">
					
					<li className="my-4 cursor-pointer nav-item ">
						<a href="./Managiment">Management</a>
					</li>
					<li className="my-4 cursor-pointer nav-item ">
						<a href="#">Achievement</a>
					</li>
					<li className="my-4 cursor-pointer nav-item ">
						<a href="./Gallery">Gallery</a>
					</li>
				</ul>
			</div>

			<div className="nav-bar">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</header>
		
	);
}

export default Header