// src/components/Footer.tsx
import type React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const location = useLocation();
	const navigate = useNavigate();

	// Função para rolar para o topo suavemente ao clicar no logo
	const handleLogoClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (location.pathname === "/") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			navigate("/");
			setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
		}
	};

	// Links Principais (Atualizados com os nomes corretos)
	const mainLinks = [
		{ name: "Início", to: "/" },
		{ name: "Quem são elas?", to: "/about" },
		{ name: "Pacotes Assistenciais", to: "/services" },
	];

	// Novos Links dos Pilares (Para facilitar acesso direto)
	const pilaresLinks = [
		{ name: "Educação Perinatal", to: "/pilares/educacao-perinatal" },
		{ name: "Plano de Parto", to: "/pilares/plano-de-parto" },
		{ name: "Assistência Hospitalar", to: "/pilares/assistencia-hospitalar" },
		{ name: "Pós Parto", to: "/pilares/pos-parto" },
	];

	return (
		<footer className="bg-brand-red-900 text-rose-100 font-open_sans border-t-4 border-rose-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

				{/* Layout alterado para 4 colunas em telas grandes para caber os Pilares */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

					{/* --- COLUNA 1: MARCA & BIO --- */}
					<div className="flex flex-col gap-4">
						<a href="/" onClick={handleLogoClick} className="flex items-center gap-2 group w-fit">
							<span className="text-3xl font-dm_serif text-white group-hover:text-rose-200 transition-colors">
								@elasdoparto
							</span>
						</a>

						<p className="text-rose-200/80 text-sm leading-relaxed text-pretty">
							Unindo o acolhimento emocional da doulagem com a segurança técnica da enfermagem obstétrica.
							Por um nascer respeitoso e fundamentado em evidências.
						</p>

						{/* Redes Sociais */}
						<div className="flex items-center gap-4 mt-2">
							<a href="https://instagram.com/elasdoparto" target="_blank" rel="noreferrer" className="bg-brand-red-800 p-2 rounded-full hover:bg-rose-600 hover:text-white transition-all text-rose-200" aria-label="Instagram">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><title>Instagram</title><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.833a3.167 3.167 0 110 6.334 3.167 3.167 0 010-6.334zM15.333 7.833a.667.667 0 11-1.333 0 .667.667 0 011.333 0z" clipRule="evenodd" /></svg>
							</a>
							<a href="mailto:contato@elasdoparto.com.br" className="bg-brand-red-800 p-2 rounded-full hover:bg-rose-600 hover:text-white transition-all text-rose-200" aria-label="Email">
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Email</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
							</a>
						</div>
					</div>

					{/* --- COLUNA 2: NAVEGAÇÃO PRINCIPAL --- */}
					<div>
						<h3 className="text-white font-dm_serif text-lg mb-4">Menu</h3>
						<ul className="space-y-3">
							{mainLinks.map((link) => (
								<li key={link.name}>
									<Link to={link.to} className="text-rose-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* --- COLUNA 3: PILARES DA ASSISTÊNCIA (NOVO) --- */}
					<div>
						<h3 className="text-white font-dm_serif text-lg mb-4">Pilares</h3>
						<ul className="space-y-3">
							{pilaresLinks.map((link) => (
								<li key={link.name}>
									<Link to={link.to} className="text-rose-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm">
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* --- COLUNA 4: CONTATO (ATUALIZADO) --- */}
					<div>
						<h3 className="text-white font-dm_serif text-lg mb-4">Fale Conosco</h3>
						<div className="space-y-4 text-rose-200 text-sm">

							{/* Telefones Clicáveis */}
							<div className="flex flex-col gap-1">
								<span className="font-bold text-white text-xs uppercase tracking-wider opacity-70">Enfermeira Obstétrica</span>
								<a href="https://wa.me/5521976942293" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
									Letícia: (21) 97694-2293
								</a>
							</div>

							<div className="flex flex-col gap-1">
								<span className="font-bold text-white text-xs uppercase tracking-wider opacity-70">Doula</span>
								<a href="https://wa.me/5521976437693" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
									Victória: (21) 97643-7693
								</a>
							</div>

							<div className="pt-2 border-t border-brand-red-800 mt-2">
								<p className="flex items-center gap-2">
									<span className="font-bold text-white">Rio de Janeiro - RJ</span>
								</p>
							</div>

							<div className="pt-2">
								<a
									href="https://wa.me/5521976942293" // Link direto para o WhatsApp de uma delas
									target="_blank"
									rel="noreferrer"
									className="inline-block text-center bg-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/50 w-full"
								>
									Agendar conversa
								</a>
							</div>
						</div>
					</div>

				</div>

				{/* --- RODAPÉ DO RODAPÉ --- */}
				<div className="border-t border-brand-red-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-rose-200/60">
					<p>
						&copy; {currentYear} Elas do Parto. Todos os direitos reservados.
					</p>
					<div className="mt-2 md:mt-0 flex gap-4">
						<span>Desenvolvido com carinho.</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;