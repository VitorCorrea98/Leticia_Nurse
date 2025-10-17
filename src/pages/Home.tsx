// src/pages/Home.tsx
import type React from "react";
import { useId } from "react";
import Foto_Hero from "../assets/Home/Foto_Hero_Le_Vitoria.jpeg";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen">
			<section id={useId()} className="relative flex justify-center w-full">
				<img
					className="size-max w-full"
					src={Foto_Hero}
					alt="Foto da Leticia e da Vitoria"
				/>
				<span className="absolute bottom-16 left-1/2 -translate-x-1/2 font-scandilover text-center text-white w-full text-7xl p-4">
					parto, conexão e ciência
				</span>
			</section>
			<section id={useId()} className="flex flex-col py-12">
				<h2 className="text-primary-dark text-center font-dm_serif text-7xl mb-28">
					Cenário obstétrico
				</h2>
				<div className="flex justify-around">
					<div className="bg-secondary-pink p-8 rounded-full">
						<div className="flex flex-col items-center -mb-24">
							<span className="text-7xl font-extrabold text-white mb-6">
								67%
							</span>
							<p className="w-52 text-2xl text-center font-open_sans text-primary-dark font-bold">
								das mulheres sofrem algum tipo de violência no parto
							</p>
						</div>
					</div>
					<div className="bg-secondary-pink p-8 rounded-full">
						<div className="flex flex-col items-center">
							<span className="text-7xl font-extrabold text-white mb-6">
								84%
							</span>
							<p className="w-52 text-pretty text-2xl text-center font-open_sans text-primary-dark font-bold">
								lugar que o brasil ocupa no ranking mundial de cesarianas
							</p>
						</div>
					</div>
					<div className="bg-secondary-pink p-8 rounded-full">
						<div className="flex flex-col items-center">
							<span className="text-7xl font-extrabold text-white mb-6">
								84%
							</span>
							<p className="w-52 text-2xl text-center font-open_sans text-primary-dark font-bold">
								desistem do parto normal
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-secondary-purple py-12">
				<h2 className="text-7xl text-center text-primary-dark ">
					Nossa missão
				</h2>
				<div className="p-12 text-white text-4xl flex flex-col justify-center w-3/4 mx-auto gap-12 text-pretty">
					<p className="font-open_sans text-pretty">
						Nos unimos porque, na prática, sabemos o quanto o sistema obstétrico
						ainda <span className="font-bold">dificulta o parto normal</span>,
						especialmente no contexto do plantão. São muitas mulheres vivendo
						experiências marcadas pelo{" "}
						<span className="font-bold">medo e pela insegurança</span>, que
						começam na gestação e se estendem até o parto. É difícil se sentir
						em paz quando não se sabe o que esperar.
					</p>
					<p className="font-open_sans">
						Nossa missão é acompanhar você desde a gestação até o parto, unindo
						o olhar técnico da enfermeira obstetra ao acolhimento da doula.
						Queremos que você viva um parto respeitoso, com informação,
						autonomia e confiança — e que se sinta segura pra parir, mesmo em um
						plantão. A gente te acompanha nessa!
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
