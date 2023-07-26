import React, { useState } from 'react'
import './Header.css'
import logo from '../../images/green nature  illustration logo template social media.png'

function Header() {
	const [burger_class, setBurgerClass] = useState('bar unclicked');
    const [menu_class, setMenuClass] = useState('nav-link hidden');
    const [isClicked, setIsClicked] = useState(false)

    const updateMenu = ()=>{
        if(!isClicked){
            setBurgerClass('bar clicked');
            setMenuClass('nav-link visible')
        }
        else{
            setBurgerClass('bar unclicked');
            setMenuClass('nav-link hidden')
        }

        setIsClicked(!isClicked)
    }
  return (
		<header className="flex shadow-md  items-center justify-between sticky top-0 z-50">
			<div className="p-2">
				<a href='/'><img className="relative  rounded-md h-28 cursor-pointer" src={logo} /></a>
			</div>

			<div className="">
				<p className="text-xl font-serif font-bold text-center">
					LEMLEM SCHOOL
				</p>
			</div>

			<div className="font-medium font-serif">
				<ul className={menu_class}>
				<li className="my-4 cursor-pointer nav-item ">
						<a href="./Homepage">Home</a>
					</li>
					<li className="my-4 cursor-pointer nav-item ">
						<a href="./management">About us</a>
					</li>
					<li className="my-4 cursor-pointer nav-item ">
						<a href="./Achievement" >Achievement</a>
					</li>
					<li className="my-4 cursor-pointer nav-item ">
						<a href="./Gallery">Gallery</a>
					</li>
				</ul>
			</div>

			<div className="nav-bar" onClick={updateMenu}>
				<span className={burger_class}></span>
				<span className={burger_class}></span>
				<span className={burger_class}></span>
			</div>
		</header>
		
	);
}

export default Header