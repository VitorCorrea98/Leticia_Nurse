// src/pages/Home.tsx
import type React from "react";
import { Link } from "react-router-dom";
import Foto_AcompanhamentoExames from "../assets/Home/Acompanhamento_de_Exames.jpeg";
import Foto_Assistencia from "../assets/Home/Assistencia_Pre_Hospitalar.jpeg";
import Foto_EduPerinatal from "../assets/Home/Educacao_Perinatal_Le_Victoria.jpeg";
import Foto_Hero from "../assets/Home/Foto_Hero_Le_Vitoria.jpeg";
// import Foto_PlanoParto from "../assets/Home/Parto_Hospitalar.jpeg";
import Foto_Doula_Enfermeira from "../assets/Home/Secao_Doula_Enfermeira.png";

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg viewBox="0 0 100 100" fill="currentColor" className={className}>
		<title>Estrela</title>
		<path d="M50 0 L60 25 L85 15 L75 40 L100 50 L75 60 L85 85 L60 75 L50 100 L40 75 L15 85 L25 60 L0 50 L25 40 L15 15 L40 25 Z" />
	</svg>
);

const Home: React.FC = () => {
	const pilares = [
		{
			title: "Educação Perinatal",
			link: "/pilares/educacao-perinatal",
			image: Foto_EduPerinatal,
			alt: "Leticia e Victoria",
		},
		// {
		// 	title: "Parto Hospitalar",
		// 	link: "/pilares/parto-hospitalar",
		// 	image: Foto_PlanoParto,
		// 	alt: "Mulher parindo",
		// },
		{
			title: "Assistência Pré Hospitalar",
			link: "/pilares/assistencia-hospitalar",
			image: Foto_Assistencia,
			alt: "Equipe dando suporte no parto",
		},
		{
			title: "Acompanhamento de Exames",
			link: "/pilares/exames-pre-natais",
			image: Foto_AcompanhamentoExames,
			alt: "Papéis rosa",
		},
	];

	return (
		<div className="w-full bg-slate-50">
			{/* --- HERO SECTION --- */}
			<section className="relative w-full h-[85vh] md:h-screen min-h-[600px] flex justify-center overflow-hidden bg-gray-900">
				<img
					className="w-full h-full object-contain md:object-fill opacity-90"
					src={Foto_Hero}
					alt="Foto da Leticia e da Vitoria"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

				<span className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 w-full px-4 text-center z-10">
					<h1 className="font-scandilover text-white text-5xl md:text-5xl lg:text-7xl drop-shadow-xl tracking-wide">
						parto, conexão e ciência
					</h1>
				</span>
			</section>

			{/* --- CENÁRIO OBSTÉTRICO (ESTRELAS) --- */}
			<section className="py-24 px-4 md:pt-12 bg-white overflow-hidden relative">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-brand-red-700 font-dm_serif text-5xl md:text-6xl mb-20">
						Cenário obstétrico
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
						{[
							{
								val: "67%",
								text: "das mulheres sofrem algum tipo de violência no parto",
								link: "#violencia",
							},
							{
								val: "84%",
								text: "dos nascimentos por cesariana no Brasil",
								link: "#cesarea",
							},
							{
								val: "31,5%",
								text: "desistem do parto normal",
								link: "#desistencia",
							},
						].map((item) => (
							<a
								key={item.text}
								href={item.link}
								className="group relative flex flex-col items-center justify-center w-72 h-72 md:w-80 md:h-80 transition-transform duration-300 hover:scale-105"
							>
								{/* Estrela SVG Gigante */}
								<StarIcon className="absolute inset-0 text-rose-200 group-hover:text-brand-rose-300 w-full h-full drop-shadow-md transition-colors" />

								{/* Conteúdo Centralizado na Estrela */}
								<div className="relative z-10 flex flex-col items-center justify-center -mb-12 h-full">
									<span className="text-6xl md:text-6xl font-extrabold text-white mb-2 ">
										{item.val}
									</span>
									<p className="font-open_sans text-brand-red-700 font-bold text-base md:text-base leading-tight max-w-[160px]">
										{item.text}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* --- NOSSA MISSÃO --- */}
			<section className="relative bg-brand-purple-600 py-20 md:py-28 text-white">
				{/* --- INÍCIO DO SVG DAS ONDAS --- */}
				{/*
         - absolute top-0 left-0 w-full: Posiciona no topo, ocupando toda a largura.
         - overflow-hidden: Garante que nada vaze nas laterais em telas pequenas.
         - leading-none: Remove espaçamentos indesejados de linha.
         - rotate-180: Vira a onda de cabeça para baixo para ela ficar no topo.
         - z-0: Fica atrás do conteúdo do texto.
      */}
				<div className="absolute -top-12 md:-top-24 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
					{/*
           - h-12 md:h-24: Define a altura da onda (mais alta em telas maiores). Ajuste conforme seu gosto.
           - text-purple-600: AQUI É O PULO DO GATO. Esta cor DEVE ser a mesma do 'bg-' da section principal.
             (Se sua section é bg-brand-purple-600, mude aqui para text-brand-purple-600)
           - fill="currentColor": Faz o SVG usar a cor definida no 'text-...' acima.
           - preserveAspectRatio="none": Permite que a onda estique para preencher a largura.
        */}
					<svg
						className="relative block w-full h-12 md:h-24 text-brand-purple-600"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<title>Ondas</title>
						<path
							d="M321.32,56.44c58-10.79,114.16-30.13,172-41.81,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,95.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							fill="currentColor"
						></path>
					</svg>
				</div>
				{/* --- FIM DO SVG DAS ONDAS --- */}

				{/* Adicionamos 'relative z-10' para garantir que o texto fique SOBRE as ondas */}
				<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
					<h2 className="text-5xl md:text-6xl text-brand-red-700 font-dm_serif mb-12">
						Nossa missão
					</h2>

					<div className="grid md:grid-cols-2 gap-12 md:gap-16 text-left font-open_sans text-lg md:text-xl leading-relaxed">
						<p>
							Nos unimos porque, na prática, sabemos o quanto o sistema
							obstétrico ainda{" "}
							<span className="font-bold">dificulta o parto normal</span>,
							especialmente no contexto do plantão. São muitas mulheres vivendo
							experiências marcadas pelo{" "}
							<span className="font-bold">medo e pela insegurança</span>, que
							começam na gestação e se estendem até o parto. É difícil se sentir
							em paz quando não se sabe o que esperar.
						</p>
						<p>
							Nossa missão é acompanhar você desde a gestação até o parto,
							unindo o olhar técnico da enfermeira obstetra ao acolhimento da
							doula. Queremos que você viva um parto respeitoso, com informação,
							autonomia e confiança — e que se sinta segura pra parir, mesmo em
							um plantão. A gente te acompanha nessa!
						</p>
					</div>
				</div>
			</section>

			{/* --- POR QUE NÃO SÓ DOULA... (ID ADICIONADO PARA O LINK DO NAVBAR) --- */}
			<section id={"doula-enfermeira"} className="flex flex-col w-full">
				{/* 1. Área da Imagem com Título Sobreposto */}
				<div className="relative w-full h-[60vh] md:h-[90vh]">
					<img
						src={Foto_Doula_Enfermeira}
						alt="Foto da Leticia e Victoria juntas"
						className="w-full h-full"
					/>

					{/* Gradiente para garantir leitura do título */}
				</div>

				{/* 2. Área de Texto (Bloco Rosa Vibrante) */}
				{/* Usei a cor bg-[#ea6eb8] para aproximar do rosa da imagem de referência */}
				<div className="bg-[#ea6eb8] px-6 py-16 md:px-16 md:py-20 text-white">
					<div className="max-w-6xl mx-auto">
						{/* Layout em Colunas (Estilo Revista para Desktop) */}
						<div className="font-open_sans text-lg md:text-xl leading-relaxed text-justify md:columns-2 gap-12 space-y-6 [&>p]:mb-6">
							<p>
								<span className="font-bold text-2xl float-left mr-2 mt-[-6px] font-dm_serif">
									Q
								</span>
								uando falamos em parto, é impossível ignorar o cenário
								brasileiro:
								<span className="font-bold bg-white/20 px-1 rounded">
									mais de 56% dos nascimentos são cesáreas
								</span>
								, muito acima dos 15% recomendados pela OMS. Esse número revela
								um sistema marcado por medos e interferências. É aqui que nossa
								união se torna um divisor de águas.
							</p>

							<p>
								A <span className="font-bold text-black/40">doula</span> é o
								pilar emocional e físico. Ela traduz o "mediquês", oferece
								conforto e transforma a experiência em algo consciente. Já a
								<span className="font-bold text-black/40">
									{" "}
									enfermeira obstétrica
								</span>{" "}
								é a guardiã técnica. Com formação científica, ela monitora a
								segurança clínica, avalia a evolução do parto e garante que tudo
								ocorra dentro das evidências.
							</p>

							<p className="font-bold text-xl md:text-2xl font-dm_serif bg-white/10 p-6 rounded-xl border-l-4 border-white my-8 break-inside-avoid">
								"Uma potencializa o trabalho da outra: unimos o acolhimento
								contínuo à segurança clínica."
							</p>

							<p>
								Estudos comprovam: o apoio contínuo{" "}
								<span className="font-bold">
									reduz em até 25% as chances de cesariana
								</span>
								. Mas a doula não realiza procedimentos clínicos, e a
								enfermeira, sozinha no plantão, muitas vezes não consegue
								oferecer o suporte emocional integral.
							</p>

							<p>
								Juntas, preenchemos essa lacuna. Permitimos que você fique mais
								tempo em casa com segurança antes de ir para a maternidade. Ter
								essas duas profissionais ao seu lado é um ato de resistência e
								cuidado, garantindo um parto mais respeitoso, fisiológico e
								seguro, principalmente no contexto de plantão.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- PILARES DA ASSISTÊNCIA (NOVA SEÇÃO) --- */}
			<section className="bg-white py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-center text-[#80326B] font-dm_serif text-4xl md:text-6xl mb-16">
						Pilares da nossa assistência
					</h2>

					{/* Container do Carrossel 
            - Mobile: overflow-x-auto (scroll horizontal)
            - Desktop: grid-cols-4 (todos visíveis lado a lado) ou flex se preferir manter carrossel
          */}
					<div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory scroll-smooth">
						{pilares.map((pilar) => (
							<Link
								key={pilar.title}
								to={pilar.link}
								className="group relative min-w-[280px] md:min-w-0 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 snap-center cursor-pointer"
							>
								{/* Imagem de Fundo (Full Cover) */}
								<img
									src={pilar.image}
									alt={pilar.alt}
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>

								{/* Overlay Gradiente (Para o texto aparecer) */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

								{/* Título e "Ver mais" no canto inferior */}
								<div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start justify-end h-full">
									<h3 className="text-white font-dm_serif text-3xl md:text-4xl leading-tight drop-shadow-md mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
										{pilar.title}
									</h3>

									{/* Seta/Texto que aparece no hover (Desktop) ou fica visível (Mobile) */}
									<span className="text-rose-200 text-sm font-bold uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
										Saiba mais
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Saiba mais</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</span>
								</div>
							</Link>
						))}
					</div>

					{/* Dica visual para mobile */}
					<p className="md:hidden text-center text-gray-400 text-sm mt-6 animate-pulse font-open_sans">
						← Arraste para explorar os pilares →
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
