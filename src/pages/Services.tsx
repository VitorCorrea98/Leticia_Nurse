// src/pages/Services.tsx
import type React from "react";
import type { Service } from "../types";

const Services: React.FC = () => {
	const services: Service[] = [
		{
			id: 1,
			title: "Home Health Care",
			description:
				"Comprehensive nursing care in the comfort of your home, including wound care, medication management, and health monitoring.",
			icon: "🏠",
		},
		{
			id: 2,
			title: "Chronic Disease Management",
			description:
				"Specialized care for patients with chronic conditions like diabetes, hypertension, and heart disease.",
			icon: "🫀",
		},
		{
			id: 3,
			title: "Post-Hospitalization Care",
			description:
				"Support and monitoring during recovery after hospital discharge to prevent readmission.",
			icon: "🏥",
		},
		{
			id: 4,
			title: "Health Assessments",
			description:
				"Comprehensive health evaluations, vital signs monitoring, and health risk assessments.",
			icon: "📊",
		},
		{
			id: 5,
			title: "Medication Management",
			description:
				"Assistance with medication organization, administration, and education about proper usage.",
			icon: "💊",
		},
		{
			id: 6,
			title: "Health Education",
			description:
				"Patient and family education about disease prevention, healthy lifestyle, and self-care techniques.",
			icon: "👨‍👩‍👧‍👦",
		},
	];

	return (
		<div className="min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						My Services
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive nursing services tailored to meet your healthcare
						needs with professionalism and compassion.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
						>
							<div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<span className="text-2xl">{service.icon}</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{service.description}
							</p>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Ready to Discuss Your Healthcare Needs?
					</h2>
					<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
						Contact me today to schedule a consultation and learn how I can help
						you achieve better health outcomes.
					</p>
					<button
						type="button"
						className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
					>
						Schedule Consultation
					</button>
				</div>
			</div>
		</div>
	);
};

export default Services;
