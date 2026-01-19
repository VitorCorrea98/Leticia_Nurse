// src/pages/About.tsx
import type React from "react";
import Foto_Leticia from "../assets/Home/Foto_Home_Le.jpeg";
import Foto_Vitoria from "../assets/Home/Foto_Home_Vitoria.jpeg";

const About: React.FC = () => {
	return (
		<div className="pt-16 bg-slate-50 min-h-screen">

			{/* Header da Página */}
			<div className="bg-rose-100 py-16 text-center px-4">
				<h1 className="text-brand-red-700 font-dm_serif text-5xl md:text-7xl mb-4">
					Quem são elas?
				</h1>
				<p className="text-rose-800 font-open_sans text-lg max-w-2xl mx-auto">
					Conheça as profissionais que estarão ao seu lado nessa jornada transformadora.
				</p>
			</div>

			<div className="max-w-6xl mx-auto px-4 py-16 space-y-24">

				{/* BLOCO VICTORIA */}
				<div className="flex flex-col md:flex-row gap-12 items-center">
					<div className="w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
						<img src={Foto_Vitoria} alt="Victória" className="w-full h-full object-cover" />
					</div>
					<div className="w-full md:w-1/2 space-y-6">
						<h2 className="text-6xl font-scandilover text-brand-red-500">Victória</h2>
						<div className="space-y-4 text-gray-700 font-open_sans text-lg leading-relaxed text-justify">
							<p>
								<span className="font-bold text-brand-red-700">Doula pela Fiocruz e Psicóloga pela Unigranrio.</span> Atualmente,
								Mestranda (UERJ), pesquisando sobre maternidade e políticas publicas.
							</p>
							<p>
								Carrego pela vida um olhar apaixonado e instigado à transformação, não atoa cheguei à doulagem,
								cheia de gás para mudar a realidade obstétrica. Já contribui para mais de 100 experiências positivas de parto.
							</p>
							<p>
								Meu olhar diferencial mora na consciência de parto como um evento biopsicossocial.
								Sou canceriana, apaixonada pela vida, amante do mar, de poesia e de música.
							</p>
						</div>
					</div>
				</div>

				{/* Divider Decorativo */}
				<div className="w-full h-px bg-rose-200" />

				{/* BLOCO LETICIA (Invertido no Desktop) */}
				<div className="flex flex-col md:flex-row-reverse gap-12 items-center">
					<div className="w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500">
						<img src={Foto_Leticia} alt="Letícia" className="w-full h-full object-cover" />
					</div>
					<div className="w-full md:w-1/2 space-y-6">
						<h2 className="text-6xl font-scandilover text-brand-red-500 md:text-right">Letícia</h2>
						<div className="space-y-4 text-gray-700 font-open_sans text-lg leading-relaxed text-justify">
							<p>
								<span className="font-bold text-brand-red-700">Enfermeira pela UNIRIO, especialista em obstetrícia pela UERJ. </span>
								Atualmente atua em uma maternidade do SUS e na equipe de parto domiciliar planejado.
							</p>
							<p>
								Sou sanguínea e libriana: adoro falar e tudo pra mim vira arte, sempre.
								Trabalho baseada em evidências científicas, na fisiologia do parto, no respeito e autonomia.
							</p>
							<p>
								Acredito que nascer vai além da ciência, é portal, é conexão, é reconhecimento e intimidade.
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default About;