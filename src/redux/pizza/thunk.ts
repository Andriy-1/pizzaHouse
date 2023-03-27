import { RootState } from "../store";
import { PizzaItem } from "./types";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk<PizzaItem[], void, { state: RootState }>(
	'pizza/fetchPizzas',
	async (_, { getState }) => {
		const { catigoriesId, sort, searchValue } = getState().filter;

		const selectCatigory = catigoriesId > 0 ? `category=${catigoriesId}` : '';
		const sortBy = `sortBy=${sort.sortProperty.replace('-', '')}`;
		const order = `order=${sort.sortProperty.includes('-') ? 'asc' : 'desc'}`;
		const search = searchValue ? `search=${searchValue}` : '';

		const { data } = await axios
			.get<PizzaItem[]>(
				`https://62910cd627f4ba1c65c720d9.mockapi.io/items?${selectCatigory}&${search}&${sortBy}&${order}`,
			);
		return data;
	}
)