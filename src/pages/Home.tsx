// src/pages/Home.tsx
import type React from "react";
import { useId } from "react";
import Foto_Hero from "../assets/Home/Foto_Hero_Le_Vitoria.jpeg";
import Foto_Leticia from "../assets/Home/Foto_Home_Le.jpeg";
import Foto_Vitoria from "../assets/Home/Foto_Home_Vitoria.jpeg";
import Foto_Doula_Enfermeira from "../assets/Home/Secao_Doula_Enfermeira.png";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen">
			<section id={useId()} className="relative flex justify-center w-full">
				<img
					className="size-max w-full"
					src={Foto_Hero}
					alt="Foto da Leticia e da Vitoria"
				/>
				<span className="absolute bottom-16 left-1/2 lg:text-7xl text-2xl -translate-x-1/2 font-scandilover text-center text-white w-full p-4">
					parto, conexão e ciência
				</span>
			</section>
			<section id={useId()} className="flex flex-col py-12 px-4">
				<h2 className="text-primary-dark text-center font-dm_serif text-5xl md:text-7xl mb-16 md:mb-28">
					Cenário obstétrico
				</h2>
				<div className="flex flex-col items-center gap-16 md:flex-row md:justify-around md:gap-0">
					<div className="bg-secondary-pink-light p-8 rounded-full">
						<div className="flex flex-col items-center">
							<span className="text-5xl md:text-7xl font-extrabold text-white mb-6">
								67%
							</span>
							<p className="max-w-xs text-lg md:text-2xl text-center font-open_sans text-primary-dark font-bold">
								das mulheres sofrem algum tipo de violência no parto
							</p>
						</div>
					</div>

					<div className="bg-secondary-pink-light p-8 rounded-full">
						<div className="flex flex-col items-center">
							<span className="text-5xl md:text-7xl font-extrabold text-white mb-6">
								84%
							</span>
							<p className="max-w-xs text-lg md:text-2xl text-pretty text-center font-open_sans text-primary-dark font-bold">
								lugar que o brasil ocupa no ranking mundial de cesarianas
							</p>
						</div>
					</div>

					<div className="bg-secondary-pink-light p-8 rounded-full">
						<div className="flex flex-col items-center">
							<span className="text-5xl md:text-7xl font-extrabold text-white mb-6">
								84%
							</span>
							<p className="max-w-xs text-lg md:text-2xl text-center font-open_sans text-primary-dark font-bold">
								desistem do parto normal
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-secondary-purple-light py-12">
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
			<section className="flex flex-col md:flex-row relative">
				<h2
					className="w-full text-center text-3xl font-bold py-8 
               md:absolute md:left-1/2 md:top-16 md:-translate-x-1/2 
               md:z-10 md:text-white md:text-6xl md:px-6 md:py-2 md:rounded-lg md:w-auto"
				>
					Quem são <span className="text-primary-light">elas</span>
				</h2>

				<div className="relative group w-full md:w-1/2 overflow-hidden">
					<img
						src={Foto_Vitoria}
						alt="Foto Vitoria"
						className="w-full h-full object-cover"
					/>

					<p
						className="absolute bottom-20 md:bottom-24 right-0 left-0 text-center 
                 text-5xl md:text-7xl text-white 
                 opacity-100 group-hover:opacity-0 
                 transition-opacity duration-300 font-scandilover"
					>
						Victória
					</p>

					<div
						className="absolute inset-0 flex items-center justify-center 
                 p-6 md:p-8 bg-black/70 text-white text-center 
                 opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 z-20"
					>
						<p className="text-lg md:text-3xl font-open_sans">
							Doula pela Fiocruz e Psicóloga pela Unigranrio. Atualmente,
							Mestranda (UERJ), pesquisando sobre maternidade e políticas
							publicas. Carrego pela vida um olhar apaixonado e instigado à
							transformação, não atoa cheguei à doulagem, cheia de gás para
							mudar a realidade obstétrica. Já contribui para mais de 100
							experiências positivas de parto. E nessa jornada, enfatizo que o
							meu olhar diferencial mora na consciência de parto como um evento
							biopsicossocial. Por isso, trabalho de maneira direcionada a cada
							uma das esferas envolvidas para que você e sua família vivenciem
							da melhor forma o nascer. Sou canceriana, apaixonada pela vida,
							amante do mar, de poesia e de música. Vez ou outra me arrisco
							escrevendo e pintando sentimentos.
						</p>
					</div>
				</div>

				<div className="relative group w-full md:w-1/2 overflow-hidden">
					<img
						src={Foto_Leticia}
						alt="Foto Leticia"
						className="w-full h-full object-cover"
					/>

					<p
						className="absolute bottom-20 md:bottom-24 right-0 left-0 text-center 
                 text-5xl md:text-7xl text-white 
                 opacity-100 group-hover:opacity-0 
                 transition-opacity duration-300 font-scandilover"
					>
						Letícia
					</p>

					<div
						className="absolute inset-0 flex items-center justify-center 
                 p-6 md:p-8 bg-black/70 text-white text-center 
                 opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 z-20"
					>
						<p className="text-lg md:text-3xl font-open_sans">
							Enfermeira pela Universidade Federal do Estado do Rio de Janeiro,
							especialista em obstetrícia pela UERJ, atualmente atua em uma
							maternidade do SUS, e na equipe de parto domiciliar planejado,
							Coletivo de Parteiras. Sou sanguínea e libriana ou seja: adoro
							falar e tudo pra mim vira arte, sempre. Uma vez me definiram como:
							confusa e entusiasmada e nada fez tanto sentido. Trabalho baseada
							em evidências científicas, na fisiologia do parto, no respeito e
							autonomia. Acredito que nascer vai além da ciência, é portal, é
							conexão é reconhecimento, é intimidade e caso você me escolha pra
							fazer parte desse momento, a gente precisa se conectar, e aqui
							você já tem um pouquinho de mim
						</p>
					</div>
				</div>
			</section>
			<section>
				<img
					src={Foto_Doula_Enfermeira}
					alt="Foto da Leticia"
					className="size-max w-full"
				/>
				<div className="bg-secondary-pink-dark py-8 px-14 text-secondary-purple-dark font-open_sans text-3xl text-justify [&>p]:indent-8 flex flex-col gap-2">
					<p className="">
						Quando falamos em parto, é impossível não lembrar que o Brasil ainda
						enfrenta um grande desafio: as altas taxas de cesariana. Segundo o
						Ministério da Saúde (2023),{" "}
						<span className="font-bold">
							mais de 56% dos nascimentos no país são cesáreos
						</span>
						, ultrapassando muito a recomendação da Organização Mundial da Saúde
						(OMS), que indica que apenas{" "}
						<span className="font-bold">
							10 a 15% dos partos necessitam de cesariana
						</span>
						.
					</p>
					<p>
						Esse número mostra algo importante: o parto normal ainda é cercado
						de medos, interferências desnecessárias e falta de apoio adequado.{" "}
						<span className="font-bold">
							É nesse cenário que o trabalho conjunto de doula e enfermeira
							obstétrica se torna um divisor de águas
						</span>
						.
					</p>
					<p>
						A <span className="font-bold">doula</span> é o suporte emocional,
						físico e informativo da gestante. Aquela que ajuda a transformar a
						experiência do parto em algo mais leve, consciente e empoderado. Já
						a <span className="font-bold">enfermeira obstétrica</span> é a
						profissional com formação técnica e científica para acompanhar o
						trabalho de parto de forma segura, realizar avaliações clínicas,
						conduzir partos de baixo risco e garantir que tudo aconteça com base
						em evidências científicas.{" "}
						<span className="font-bold">
							Mas o que muitas mulheres ainda não sabem é que uma potencializa o
							trabalho da outra
						</span>
						.
					</p>
					<p>
						A doula oferece o suporte contínuo, que reduz a ansiedade e a dor,
						fatores que, comprovadamente, diminuem a necessidade de intervenções
						e de cesarianas. Um estudo publicado no Cochrane Database of
						Systematic Reviews (Bohren et al., 2017) mostrou que o apoio
						contínuo durante o parto
						<span className="font-bold">
							reduz em até 25% a probabilidade de cesariana
						</span>
						e aumenta a satisfação materna.
					</p>
					<p>
						Já a enfermeira obstétrica, ao atuar junto, garante segurança
						clínica, monitorando a evolução do parto e tomando decisões baseadas
						em protocolos e evidências. Possibilitando que a gestante fique mais
						tempo em casa, antes de ir para a maternidade. Juntas, elas formam
						uma dupla que{" "}
						<span className="font-bold">
							une o acolhimento da presença contínua com a segurança da
							assistência profissional
						</span>
						.
					</p>
					<p>
						A doula sozinha não pode assistir partos, e a enfermeira obstétrica,
						quando trabalha sem suporte emocional direto à gestante, muitas
						vezes não consegue oferecer o nível de conforto e tranquilidade que
						o momento exige. Por isso, quando caminham juntas, o resultado é um
						parto mais tranquilo, respeitoso e fisiológico, sem abrir mão da
						segurança.
					</p>
					<p>
						Em um sistema obstétrico que ainda medicaliza e intervém demais, ter
						essas duas profissionais ao seu lado é um ato de resistência, de
						cuidado e de escolha consciente, principalmente se você parirá no
						plantão.
					</p>
				</div>
			</section>
			<section className="bg-primary-dark py-24 px-16">
				<div className="flex flex-col text-6xl text-red font-bold pl-4 font-dm_serif">
					<span>Educação</span>
					<span className="-mt-2">perinatal</span>
					<div>
						<span className="text-white">importa</span>
						<span>?</span>
					</div>
				</div>
				<div className="py-8 text-white font-thin font-open_sans text-3xl text-justify [&>p]:indent-10 flex flex-col gap-2">
					<p>
						As consultas de educação perinatal são um dos pilares para uma
						experiência de parto positiva e segura, especialmente quando a
						mulher vai parir no plantão, ou seja, assistida por uma equipe que
						ela não conhece previamente. Quando uma mulher chega ao parto sem
						preparo, ela tende a sentir medo, insegurança e dúvida, sensações
						que podem gerar tensão corporal e emocional, interferindo
						diretamente na progressão do trabalho de parto. Isso ocorre porque o
						medo e a ansiedade aumentam a liberação de adrenalina, um hormônio
						que inibe a ocitocina, substância essencial para as contrações
						eficazes. Ou seja, a falta de conhecimento pode literalmente
						dificultar o parto.
					</p>
					<p>
						Além de favorecer um parto mais tranquilo e com melhores desfechos,
						a educação perinatal é uma ferramenta poderosa na prevenção da
						violência obstétrica. Esse tipo de violência pode ocorrer em
						diferentes momentos da assistência, inclusive no pré-natal, e se
						manifesta em atitudes desrespeitosas, intervenções sem necessidade,
						negligência, falta de informação ou comunicação inadequada.
					</p>
					<p>
						Diversos estudos brasileiros mostram que a maioria das mulheres
						inicia o pré-natal desejando o parto normal, mas muitas acabam
						mudando de opinião ou não conseguem realizá-lo. Essa mudança de
						trajetória está frequentemente associada à falta de informação
						adequada, à influência de profissionais de saúde, ao medo da dor e à
						cultura hospitalar intervencionista. Esses achados reforçam a
						importância da educação perinatal como estratégia essencial para
						fortalecer a autonomia da mulher, garantir decisões informadas e
						reduzir a distância entre o desejo e a realidade do parto no Brasil.
					</p>
					<p>
						Nessa situação, o conhecimento adquirido nas consultas se transforma
						em ferramenta de autonomia e proteção, permitindo que a mulher saiba
						o que pode solicitar, o que pode recusar e como expressar suas
						vontades com clareza e segurança. Nós auxiliamos e apoiamos a
						construção do Plano de Parto, que será construído a cada consulta,
						de acordo com os temas que abordaremos.
					</p>
					<p>
						As consultas de educação perinatal também envolvem o acompanhante,
						tornando-o um aliado consciente. Ele passa a compreender o que é
						normal, o que requer atenção e como oferecer apoio físico e
						emocional de maneira efetiva. Assim, mesmo diante de uma equipe
						nova, a mulher e seu acompanhante conseguem manter o foco, a
						tranquilidade e o protagonismo.
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
