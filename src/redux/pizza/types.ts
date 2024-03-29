

export type PizzaItem = {
	id: string;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}

export interface PizzaSliceState {
	items: PizzaItem[];
	status: string;
}
