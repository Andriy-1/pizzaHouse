export type CartItem = {
	id: string;
	imageUrl: string;
	title: string;
	type: string;
	size: number;
	count: number;
	price: number;
 };
 
 export interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
 }