// src/pages/Services.tsx
import type React from "react";

// import Img_Lirio from "../assets/Services/lirio.png";
// import Img_Margarida from "../assets/Services/margarida.png";
// Importe suas imagens de flores aqui
// Se não tiver ainda, o código vai mostrar um quadrado colorido no lugar
// import Img_Orquidea from "../assets/Services/orquidea.png";
// import Img_Tulipa from "../assets/Services/tulipa.png";

const Services: React.FC = () => {
	const pacotes = [
		{
			id: "orquidea",
			name: "Orquídea",
			// Cor aproximada do roxo da imagem
			bgColor: "bg-[#9d4e8b]",
			// Cor da faixinha do nome
			labelColor: "bg-[#782f66]",
			items: [
				"Assistência Pré Hospitalar & Hospitalar",
				"+ 6 consultas temáticas",
				"+ Presencial: cuidados com o recém nascido",
				"+ Pintura na Barriga",
			],
			image: "Img_Orquidea",
			flowerPosition: "left", // Flor na esquerda
			zIndex: "z-[4]"
		},
		{
			id: "lirio",
			name: "Lírio",
			// Cor aproximada do rosa chiclete
			bgColor: "bg-[#f472b6]",
			labelColor: "bg-[#db5da0]",
			items: [
				"Assistência Pré Hospitalar & Hospitalar",
				"+ 5 consultas temáticas",
			],
			image: "Img_Lirio",
			flowerPosition: "right", // Flor na direita
			zIndex: "z-[3]"
		},
		{
			id: "margarida",
			name: "Margarida",
			// Cor aproximada do vermelho escuro/vinho
			bgColor: "bg-[#8b0000]",
			labelColor: "bg-[#660000]",
			items: [
				"Assistência Pré Hospitalar & Hospitalar",
				"+ 4 consultas temáticas",
			],
			image: "Img_Margarida",
			flowerPosition: "left",
			zIndex: "z-[2]"
		},
		{
			id: "tulipa",
			name: "Tulipa",
			// Cor aproximada do vermelho vivo
			bgColor: "bg-[#ff1f1f]",
			labelColor: "bg-[#d61313]",
			items: [
				"Assistência Pré Hospitalar & Hospitalar",
				"+ 2 consultas temáticas",
			],
			image: "Img_Tulipa",
			flowerPosition: "left", // Na imagem parece esquerda/baixo
			zIndex: "z-[1]"
		},
	];

	return (
		<div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Cabeçalho "Pacotes Assistenciais" com fonte script */}
				<div className="text-center mb-16">
					<h1 className="font-scandilover text-6xl md:text-8xl text-brand-red-700 drop-shadow-sm">
						Pacotes
					</h1>
					<h2 className="font-scandilover text-5xl md:text-7xl text-brand-red-500 -mt-4 md:-mt-8">
						assistenciais
					</h2>
				</div>

				{/* Lista de Cards */}
				<div className="flex flex-col gap-8 md:gap-12">
					{pacotes.map((pkg) => (
						<div
							key={pkg.id}
							className={`relative w-full rounded-[2.5rem] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] ${pkg.bgColor} min-h-[280px] flex flex-col md:flex-row items-center not-first:-mt-28 not-first:pt-32 ${pkg.zIndex}`}
						>
							{/* Lógica de Renderização: Inverter ordem se a flor for na direita */}
							<div
								className={`w-full h-full flex flex-col md:flex-row ${pkg.flowerPosition === "right" ? "md:flex-row-reverse" : ""}`}
							>
								{/* --- ÁREA DA FLOR --- */}
								<div className="relative w-full md:w-2/5 h-64 md:h-auto flex items-center justify-center p-4">
									{/* Imagem da Flor */}
									<img
										src={pkg.image}
										alt={`Pacote ${pkg.name}`}
										className="w-full h-full object-contain drop-shadow-2xl z-10 max-h-[250px]"
									/>

									{/* Nome da Flor (Label estilizada sobre a imagem/faixa) */}
									<div
										className={`absolute bottom-6 md:bottom-10 w-full text-center z-20`}
									>
										<span
											className={`font-scandilover text-white text-5xl md:text-6xl px-4 py-1 rotate-[-4deg] inline-block shadow-sm ${pkg.labelColor}`}
										>
											{pkg.name}
										</span>
									</div>
								</div>

								{/* --- ÁREA DO TEXTO --- */}
								<div
									className={`w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-white ${pkg.flowerPosition === "right" ? "md:text-left" : "md:text-left text-center"}`}
								>
									{/* Título Principal do Card */}
									<h3 className="font- text-2xl md:text-3xl mb-4 leading-tight">
										{pkg.items[0]}
									</h3>

									{/* Lista de itens restantes */}
									<ul className="space-y-2">
										{pkg.items.slice(1).map((item) => (
											<li
												key={item}
												className="font-open_sans text-lg md:text-xl font-medium opacity-90"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
