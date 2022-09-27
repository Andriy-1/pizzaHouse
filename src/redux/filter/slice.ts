import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState, SortPropertyEnum, SortType } from './types';

const initialState: FilterSliceState = {
	catigoriesId: 0,
	sort: {
		name: 'популярності',
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
	searchValue: ''
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCatigoryId: (state, action: PayloadAction<number>) => {
			state.catigoriesId = action.payload;
		},
		setSelected: (state, action: PayloadAction<SortType>) => {
			state.sort = action.payload;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		setFilter: (state, action: PayloadAction<FilterSliceState>) => {
			state.catigoriesId = Number(action.payload.catigoriesId);
			state.sort = action.payload.sort;



		}
	},
})



export const { setCatigoryId, setSelected, setSearchValue, setFilter } = filterSlice.actions
export default filterSlice.reducer