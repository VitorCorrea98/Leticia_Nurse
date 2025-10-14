// src/pages/Home.tsx
import type React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							Compassionate Care
							<span className="text-blue-600 block">When You Need It Most</span>
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							Registered Nurse dedicated to providing exceptional healthcare
							services with empathy, expertise, and personalized attention for
							every patient.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/services"
								className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
							>
								View My Services
							</Link>
							<Link
								to="/about"
								className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
							>
								Learn About Me
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Stats */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								5+
							</div>
							<div className="text-gray-600">Years Experience</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								1000+
							</div>
							<div className="text-gray-600">Patients Served</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								24/7
							</div>
							<div className="text-gray-600">Availability</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								99%
							</div>
							<div className="text-gray-600">Satisfaction Rate</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Why Choose My Services?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Professional healthcare services tailored to your unique needs and
							circumstances.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-lg text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">👩‍⚕️</span>
							</div>
							<h3 className="text-xl font-semibold mb-4">Expert Care</h3>
							<p className="text-gray-600">
								Licensed RN with extensive experience in patient care,
								medication management, and health education.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">❤️</span>
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Compassionate Approach
							</h3>
							<p className="text-gray-600">
								Treating every patient with dignity, respect, and genuine care
								for their well-being.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🏠</span>
							</div>
							<h3 className="text-xl font-semibold mb-4">Home Visits</h3>
							<p className="text-gray-600">
								Convenient in-home nursing services that prioritize your comfort
								and convenience.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
