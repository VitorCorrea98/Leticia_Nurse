// src/App.tsx
import type React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes Globais
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScroolToTop"; // Importe o componente criado

// Páginas Principais
import About from "./pages/About";
import Home from "./pages/Home";
import AssistenciaHospitalar from "./pages/pilares/AssistenciaHospitalar";
// Páginas dos Pilares (Novas)
import EducacaoPerinatal from "./pages/pilares/EducacaoPerinatal";
import ExamesPreNatais from "./pages/pilares/ExamesPreNatais";
import Services from "./pages/Services";
import Statistics from "./pages/Statistics"; // Se ainda estiver usando

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* ScrollToTop deve ficar dentro do Router, mas fora das Routes visuais */}
			<ScrollToTop />

			<Navbar />

			<Routes>
				{/* Rotas Principais */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/statistics" element={<Statistics />} />

				{/* Rotas dos Pilares 
           Dica: Agrupar sob o prefixo "/pilares" ajuda na organização e SEO
        */}
				<Route
					path="/pilares/educacao-perinatal"
					element={<EducacaoPerinatal />}
				/>
				<Route
					path="/pilares/assistencia-hospitalar"
					element={<AssistenciaHospitalar />}
				/>

				{/* Nota: Se "Exames" for uma página separada ou fizer parte do pré-natal */}
				<Route
					path="/pilares/exames-pre-natais"
					element={<ExamesPreNatais />}
				/>

				{/* Rota 404 (Opcional, mas boa prática) */}
				<Route
					path="*"
					element={
						<div className="p-20 text-center">Página não encontrada</div>
					}
				/>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
