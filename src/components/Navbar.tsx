// src/components/Navbar.tsx
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false); // Menu Mobile Principal
	const [isPilaresOpen, setIsPilaresOpen] = useState(false); // Submenu Mobile Pilares
	const [showContacts, setShowContacts] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();
	const isHome = location.pathname === "/";

	// Links dos Pilares
	const pilaresLinks = [
		{ name: "Educação Perinatal", href: "/pilares/educacao-perinatal" },
		{ name: "Exames Pré Natais", href: "/pilares/exames-pre-natais" },
		{ name: "Assistência Hospitalar", href: "/pilares/assistencia-hospitalar" },
		// { name: "Pós Parto", href: "/pilares/pos-parto" },
	];

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Estilização Dinâmica (Transparente -> Branco)
	const navBackgroundClass =
		isHome && !scrolled
			? "bg-transparent py-2"
			: "bg-brand-red-500 backdrop-blur-md shadow-sm py-1";
	const textColorClass =
		isHome && !scrolled
			? "text-white hover:text-rose-200"
			: "text-white hover:text-brand-red-700";
	const logoColorClass =
		isHome && !scrolled ? "text-white" : "text-brand-red-700";

	const handleLogoClick = (e: React.MouseEvent) => {
		e.preventDefault(); // Previne o comportamento padrão do link

		const targetId = "doula-enfermeira";

		if (isHome) {
			// Se já estamos na Home, apenas rola suavemente até o ID
			const element = document.getElementById(targetId);
			element?.scrollIntoView({ behavior: "smooth" });
		} else {
			// Se estamos em outra página (ex: /about), vai para a Home primeiro
			navigate("/");

			// Pequeno delay para garantir que a Home carregou antes de procurar o ID
			setTimeout(() => {
				const element = document.getElementById(targetId);
				element?.scrollIntoView({ behavior: "smooth" });
			}, 100);
		}
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* LOGO */}
					<div className="flex-shrink-0 flex items-center">
						<button
							type="button"
							onClick={handleLogoClick}
							className={`text-2xl md:text-3xl font-dm_serif transition-colors duration-300 cursor-pointer ${logoColorClass}`}
						>
							@elasdoparto
						</button>
					</div>

					{/* DESKTOP MENU */}
					<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
						<Link
							to="/"
							className={`font-open_sans font-medium transition-all ${textColorClass}`}
						>
							Início
						</Link>
						<Link
							to="/about"
							className={`font-open_sans font-medium transition-all ${textColorClass}`}
						>
							Quem são elas?
						</Link>

						{/* DROPDOWN PILARES (DESKTOP) */}
						<div className="relative group h-full flex items-center">
							<button
								type="button"
								className={`font-open_sans font-medium transition-all flex items-center gap-1 ${textColorClass}`}
							>
								Pilares
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Seta</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{/* Conteúdo do Dropdown */}
							<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
								<div className="bg-white rounded-xl shadow-xl border border-rose-100 overflow-hidden py-2">
									{pilaresLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-rose-500 hover:text-brand-red-700 transition-colors"
										>
											{link.name}
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link
							to="/services"
							className={`font-open_sans font-medium transition-all ${textColorClass}`}
						>
							Pacotes
						</Link>

						{/* Botão Contatos (Mantido Igual) */}
						<div className="relative">
							<button
								type="button"
								onClick={() => setShowContacts(!showContacts)}
								className={`font-open_sans font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm ${isHome && !scrolled ? "bg-white text-brand-red-700 hover:bg-rose-100" : "bg-brand-red-700 text-white hover:bg-rose-600"}`}
							>
								Contatos
							</button>
							{showContacts && (
								<div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-rose-100 p-4">
									<h4 className="text-brand-red-700 font-bold mb-2 border-b pb-1">
										Fale Conosco
									</h4>
									<div className="space-y-3 text-gray-700">
										<div>
											<p className="text-xs text-brand-rose-500 font-bold uppercase">
												Enfermeira
											</p>
											<p>Letícia: (21) 97694-2293</p>
										</div>
										<div>
											<p className="text-xs text-brand-rose-500 font-bold uppercase">
												Doula
											</p>
											<p>Victória: (21) 97643-7693</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* MOBILE TOGGLE */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className={`p-2 focus:outline-none ${logoColorClass}`}
						>
							<svg
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Navbar</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* MOBILE MENU */}
			{isOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-rose-100 max-h-[90vh] overflow-y-auto">
					<div className="px-4 py-6 space-y-4 flex flex-col">
						<Link
							to="/"
							onClick={() => setIsOpen(false)}
							className="text-gray-600 font-medium py-2 border-b border-gray-50"
						>
							Início
						</Link>
						<Link
							to="/about"
							onClick={() => setIsOpen(false)}
							className="text-gray-600 font-medium py-2 border-b border-gray-50"
						>
							Quem são elas?
						</Link>

						{/* Submenu Pilares Mobile */}
						<div>
							<button
								type="button"
								onClick={() => setIsPilaresOpen(!isPilaresOpen)}
								className="w-full flex justify-between items-center text-gray-600 font-medium py-2 border-b border-gray-50"
							>
								Pilares da Assistência
								<svg
									className={`w-4 h-4 transition-transform ${isPilaresOpen ? "rotate-180" : ""}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Pilares</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{/* Lista Expansível */}
							{isPilaresOpen && (
								<div className="bg-brand-rose-500/50 pl-4 py-2 space-y-2 flex flex-col rounded-b-lg">
									{pilaresLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href}
											onClick={() => setIsOpen(false)}
											className="text-brand-red-700 text-sm py-1 font-medium"
										>
											• {link.name}
										</Link>
									))}
								</div>
							)}
						</div>

						<Link
							to="/services"
							onClick={() => setIsOpen(false)}
							className="text-gray-600 font-medium py-2 border-b border-gray-50"
						>
							Pacotes
						</Link>

						<div className="bg-brand-rose-500 p-4 rounded-lg mt-2">
							<p className="font-bold text-brand-red-700 mb-2">Contatos</p>
							<p className="text-sm">Letícia: (21) 97694-2293</p>
							<p className="text-sm mt-1">Victória: (21) 97643-7693</p>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
