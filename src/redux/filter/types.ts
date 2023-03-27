export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	PRICE_DESC = 'price',
	TITLE_ASC = '-title'
}

export type SortType = {
	name: string;
	sortProperty: SortPropertyEnum;
}

export interface FilterSliceState {
	catigoriesId: number;
	sort: SortType;
	searchValue?: string;
}