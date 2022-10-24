import React from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	
  return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
			<div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
				<div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
					<Link
						className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
						to="/"
					>
						<img src={logo} alt="GOT logo" style={{height: '40px', width: '300px'}}/>
					</Link>
					<button
						className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<Bars3Icon className="w-6 h-6" />
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow items-center" +
						(navbarOpen ? " flex" : " hidden")
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
						<li className="nav-item">
							<Link
								className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
								to="/houses"
							>
								<span className="ml-2">Houses</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
								to="/characters"
							>
								<span className="ml-2">Characters</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
								to="/books"
							>
								<span className="ml-2">Books</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  );
}