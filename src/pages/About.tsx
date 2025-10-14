// src/pages/About.tsx
import type React from "react";

const About: React.FC = () => {
	return (
		<div className="min-h-screen py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						About Me
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Dedicated healthcare professional committed to making a difference
						in patients' lives
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Profile Image Placeholder */}
					<div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
						<span className="text-gray-500 text-lg">Nurse Photo</span>
					</div>

					{/* Content */}
					<div className="space-y-6">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								My Journey in Nursing
							</h2>
							<p className="text-gray-600 leading-relaxed">
								With over 5 years of experience in the healthcare field, I've
								dedicated my career to providing compassionate and professional
								nursing care. My journey began at [Hospital/University Name],
								where I developed a passion for patient-centered care.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								My Philosophy
							</h3>
							<p className="text-gray-600 leading-relaxed">
								I believe that every patient deserves individualized attention
								and care that addresses not just their physical needs, but their
								emotional and psychological well-being too. Healthcare is a
								partnership between provider and patient.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								Education & Certifications
							</h3>
							<ul className="text-gray-600 space-y-2">
								<li>• Bachelor of Science in Nursing (BSN)</li>
								<li>• Registered Nurse (RN) License</li>
								<li>• CPR and BLS Certified</li>
								<li>• [Other relevant certifications]</li>
							</ul>
						</div>

						<div className="bg-blue-50 p-6 rounded-lg">
							<h3 className="text-lg font-semibold text-blue-900 mb-2">
								Why I Love What I Do
							</h3>
							<p className="text-blue-800">
								"There's no greater reward than seeing a patient recover and
								knowing I played a part in their healing journey. Every day
								brings new opportunities to make a positive impact."
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
