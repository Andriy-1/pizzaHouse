import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas } from './thunk';
import { PizzaItem, PizzaSliceState } from './types';



const initialState: PizzaSliceState = {
	items: [],
	status: 'loading', //Loading | success | error
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<PizzaItem[]>) => {
			state.items = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.pending, (state) => {
			state.status = 'loading';
			state.items = [];
		})
		builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
			state.items = action.payload;
			state.status = 'success';
		})
		builder.addCase(fetchPizzas.rejected, (state) => {
			state.status = 'error';
			state.items = [];
		})
	},

});


export default pizzaSlice.reducer;