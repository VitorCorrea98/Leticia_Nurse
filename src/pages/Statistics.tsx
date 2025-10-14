// src/pages/Statistics.tsx
import type React from "react";
import type { Statistic } from "../types";

const Statistics: React.FC = () => {
	const stats: Statistic[] = [
		{ id: 1, number: "5", label: "Years of Experience", suffix: "+" },
		{ id: 2, number: "1000", label: "Patients Served", suffix: "+" },
		{ id: 3, number: "99", label: "Patient Satisfaction Rate", suffix: "%" },
		{ id: 4, number: "24/7", label: "Availability" },
		{ id: 5, number: "500", label: "Home Visits Completed", suffix: "+" },
		{ id: 6, number: "50", label: "Families Supported", suffix: "+" },
	];

	const achievements = [
		"Consistently maintained 99% patient satisfaction rating",
		"Reduced hospital readmission rates by 40% for post-operative patients",
		"Implemented personalized care plans resulting in improved patient outcomes",
		"Recognized for excellence in patient education and support",
	];

	return (
		<div className="min-h-screen py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						My Work & Impact
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Tracking progress and celebrating milestones in delivering quality
						healthcare
					</p>
				</div>

				{/* Statistics Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
						>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
								{stat.number}
								{stat.suffix}
							</div>
							<div className="text-gray-600 font-medium">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Achievements */}
				<div className="bg-gray-50 rounded-2xl p-8 mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
						Key Achievements
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{achievements.map((achievement) => (
							<div
								key={achievement}
								className="flex items-start space-x-4 bg-white p-4 rounded-lg"
							>
								<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<svg
										className="w-3 h-3 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<title>Button</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={3}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<p className="text-gray-700">{achievement}</p>
							</div>
						))}
					</div>
				</div>

				{/* Patient Testimonials */}
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						Patient Testimonials
					</h2>
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
							<p className="text-gray-600 italic mb-4">
								"Exceptional care and attention to detail. She took the time to
								understand all of my concerns and provided clear explanations
								for everything."
							</p>
							<div className="font-semibold text-gray-900">- Sarah M.</div>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
							<p className="text-gray-600 italic mb-4">
								"Professional, compassionate, and knowledgeable. Made my
								recovery much smoother with her expertise and caring approach."
							</p>
							<div className="font-semibold text-gray-900">- John D.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
