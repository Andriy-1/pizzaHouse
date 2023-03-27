import React from 'react';

type CategoriesProps = {
	catigoriesIdActive: number;
	onClickCategories: (i: number) => void;
}
const Categories: React.FC<CategoriesProps> = ({ catigoriesIdActive, onClickCategories }) => {

	const categories: string[] = ['Всі', 'Мясні', 'Вегетарианскі', 'Гриль', 'Острі', 'Закриті'];

	return (
		<div className="categories">
			<ul>
				{categories.map((value, index) => (
					<li
						key={index + value}
						onClick={() => onClickCategories(index)}
						className={catigoriesIdActive === index ? 'categories__item active' : 'categories__item'}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};
export default React.memo(Categories);
