import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './paginator.module.scss'
type PaginationProps = {
	onPageChange: (event: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
	return (
		<ReactPaginate
			className={style.paginator}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(event) => onPageChange(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="<"
		/>
	);
}
export default Pagination;