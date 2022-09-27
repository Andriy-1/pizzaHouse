import React from 'react';
import '../scss/app.scss';
import qs from 'qs';

import { selectPizza } from '../redux/pizza/selector'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCatigoryId, setSelected, setFilter } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selector';

import Categories from '../components/categories/categories';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import Skeleton from '../components/pizzaBlock/skeleton';
import Sort, { listSort, } from '../components/sort/sort';
import { useAppDispatch } from '../redux/store';
import { fetchPizzas } from '../redux/pizza/thunk';
import { SortType } from '../redux/filter/types';
//import Pagination from '../components/paginator';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);

	const { items, status } = useSelector(selectPizza);
	const { catigoriesId, sort, searchValue } = useSelector(selectFilter);

	const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const searchFilter = items.map((obj, index) => (
		<PizzaBlock key={index} {...obj} />
	));

	const onClickCategories = React.useCallback(
		(i: number) => {
			dispatch(setCatigoryId(i))
		}, [dispatch])
	const onClickListItem = React.useCallback((i: SortType) => {
		dispatch(setSelected(i))
	}, [dispatch]);

	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))
			const sort = listSort.find((obj) => obj.sortProperty === params.sort);

			dispatch(setFilter({
				catigoriesId: Number(params.catigoriesId),
				sort: sort ? sort : listSort[0]
			}));
			isSearch.current = true;
		}
	}, [dispatch]);

	React.useEffect(() => {
		if (!isSearch.current) {
			dispatch(fetchPizzas());
		}
		isSearch.current = false;
		window.scrollTo(0, 0);
	}, [catigoriesId, sort, searchValue, dispatch]);

	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				catigoriesId: catigoriesId,
				sort: sort.sortProperty,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [catigoriesId, navigate, sort]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories catigoriesIdActive={catigoriesId} onClickCategories={onClickCategories} />
				<Sort sort={sort} onClickListItem={onClickListItem} />
			</div>
			<h2 className="content__title">Всі піцци</h2>
			{status === 'error' ? (
				<div className="cart--empty">
					<h2>
						Виникла проблема <span>😕</span>
					</h2>
					<p>
						Не вдалося получити всі піцци.
						<br />
						Повторіть спробу пізніше.
					</p>
				</div>
			) : (
				<div className="content__items">{status === 'loading' ? skeleton : searchFilter}</div>
			)}

			{/* <Pagination onPageChange={(e) => setCurrentPage(e)} /> */}
		</div>
	);
}

export default React.memo(Home);
