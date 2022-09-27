import React from 'react';
import { Link } from 'react-router-dom';

const CartEnpty: React.FC = () => {
	return (
		<div className="container container--cart">
			<div className="cart cart--empty">
				<h2>
					Кошик порожній <span>😕</span>
				</h2>
				<p>
					Найімовірніше, ви не замовляли ще піцу.
					<br />
					Щоб замовити піцу, перейди на головну сторінку.
				</p>
				<img src="/img/empty-cart.png" alt="Empty cart" />
				<Link to="/" className="button button--black">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div>
	);
};
export default CartEnpty;
