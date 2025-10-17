// src/components/Footer.tsx
import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<div className="flex items-center mb-4">
							<div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-sm">LR</span>
							</div>
							<span className="ml-2 text-xl font-semibold">
								Leticia Rezende
							</span>
						</div>
						<p className="text-gray-400 mb-4 max-w-md">
							Providing compassionate and professional nursing care with a focus
							on patient well-being and health education.
						</p>
						<div className="text-gray-400">
							<p>Email: nurse@example.com</p>
							<p>Phone: (555) 123-4567</p>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About Me
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/statistics"
									className="text-gray-400 hover:text-white transition-colors"
								>
									My Work
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Connect</h3>
						<div className="flex space-x-4">
							<a
								href="/"
								className="text-gray-400 hover:text-white transition-colors"
							>
								LinkedIn
							</a>
							<a
								href="/"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Professional Network
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Leticia Rezende. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
