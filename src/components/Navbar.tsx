// src/components/Navbar.tsx
import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About Me", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "My Work", href: "/statistics" },
	];

	return (
		<nav className="bg-primary-light shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0 flex items-center">
							<span className="ml-2 text-xl font-semibold text-primary-dark">
								elasdoparto
							</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`${
									location.pathname === item.href
										? "text-white"
										: "text-white hover:text-white border-transparent"
								} px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200`}
							>
								{item.name}
							</Link>
						))}
						<button
							type="button"
							className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
						>
							Contact Me
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Teste</title>
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={`${
										location.pathname === item.href
											? "text-blue-600 bg-blue-50"
											: "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
									} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<button
								type="button"
								className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
							>
								Contact Me
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
