// src/types/index.ts
export interface Service {
	id: number;
	title: string;
	description: string;
	icon: string;
}

export interface Statistic {
	id: number;
	number: string;
	label: string;
	suffix?: string;
}

export interface Testimonial {
	id: number;
	name: string;
	content: string;
	role: string;
}
